// Coupon Controller
// Handles coupon CRUD and validation

import { Response } from 'express';
import { validationResult } from 'express-validator';
import prisma from '../utils/prisma';
import { 
  AuthenticatedRequest, 
  CreateCouponRequest, 
  UpdateCouponRequest,
  ValidateCouponRequest,
  CouponValidationResult
} from '../types';
import { publishCouponApplied } from '../events/publisher';

// =============================================================================
// GET ALL COUPONS
// =============================================================================

export const getAllCoupons = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { 
      page = '1', 
      limit = '20', 
      status, 
      type,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    const where: Record<string, unknown> = {};

    if (status) where.status = status;
    if (type) where.type = type;
    if (search) {
      where.OR = [
        { code: { contains: search as string, mode: 'insensitive' } },
        { name: { contains: search as string, mode: 'insensitive' } },
        { description: { contains: search as string, mode: 'insensitive' } },
      ];
    }

    const [coupons, total] = await Promise.all([
      prisma.coupon.findMany({
        where,
        include: { _count: { select: { usages: true } } },
        orderBy: { [sortBy as string]: sortOrder },
        skip,
        take: limitNum,
      }),
      prisma.coupon.count({ where }),
    ]);

    res.json({
      success: true,
      data: coupons.map(coupon => ({
        ...coupon,
        value: Number(coupon.value),
        maxDiscount: coupon.maxDiscount ? Number(coupon.maxDiscount) : null,
        minOrderAmount: coupon.minOrderAmount ? Number(coupon.minOrderAmount) : null,
        usageCount: coupon._count.usages,
      })),
      meta: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    console.error('Get all coupons error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch coupons' });
  }
};

// =============================================================================
// GET COUPON BY ID
// =============================================================================

export const getCouponById = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const coupon = await prisma.coupon.findUnique({
      where: { id },
      include: { 
        usages: {
          orderBy: { usedAt: 'desc' },
          take: 50,
        },
        _count: { select: { usages: true } },
      },
    });

    if (!coupon) {
      res.status(404).json({ success: false, error: 'Coupon not found' });
      return;
    }

    res.json({
      success: true,
      data: {
        ...coupon,
        value: Number(coupon.value),
        maxDiscount: coupon.maxDiscount ? Number(coupon.maxDiscount) : null,
        minOrderAmount: coupon.minOrderAmount ? Number(coupon.minOrderAmount) : null,
        usageCount: coupon._count.usages,
        usages: coupon.usages.map(u => ({
          ...u,
          discountAmount: Number(u.discountAmount),
        })),
      },
    });
  } catch (error) {
    console.error('Get coupon by ID error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch coupon' });
  }
};

// =============================================================================
// CREATE COUPON
// =============================================================================

export const createCoupon = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success: false, errors: errors.array() });
      return;
    }

    const data: CreateCouponRequest = req.body;

    // Check if code already exists
    const existing = await prisma.coupon.findUnique({ where: { code: data.code.toUpperCase() } });
    if (existing) {
      res.status(400).json({ success: false, error: 'Coupon code already exists' });
      return;
    }

    const coupon = await prisma.coupon.create({
      data: {
        code: data.code.toUpperCase(),
        name: data.name,
        description: data.description,
        type: data.type,
        value: data.value,
        maxDiscount: data.maxDiscount,
        minOrderAmount: data.minOrderAmount,
        startDate: data.startDate ? new Date(data.startDate) : new Date(),
        endDate: data.endDate ? new Date(data.endDate) : undefined,
        maxUses: data.maxUses,
        maxUsesPerClient: data.maxUsesPerClient || 1,
        applicableProducts: data.applicableProducts || [],
        applicableLicenseTypes: data.applicableLicenseTypes || [],
        applicableClients: data.applicableClients || [],
        isFirstPurchaseOnly: data.isFirstPurchaseOnly || false,
        isRenewalApplicable: data.isRenewalApplicable || false,
        isStackable: data.isStackable || false,
        createdById: req.user?.userId,
        createdByName: req.user?.email,
      },
    });

    res.status(201).json({
      success: true,
      data: coupon,
      message: 'Coupon created successfully',
    });
  } catch (error) {
    console.error('Create coupon error:', error);
    res.status(500).json({ success: false, error: 'Failed to create coupon' });
  }
};

// =============================================================================
// UPDATE COUPON
// =============================================================================

export const updateCoupon = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success: false, errors: errors.array() });
      return;
    }

    const { id } = req.params;
    const data: UpdateCouponRequest = req.body;

    const existing = await prisma.coupon.findUnique({ where: { id } });
    if (!existing) {
      res.status(404).json({ success: false, error: 'Coupon not found' });
      return;
    }

    const coupon = await prisma.coupon.update({
      where: { id },
      data: {
        ...data,
        endDate: data.endDate ? new Date(data.endDate) : undefined,
      },
    });

    res.json({
      success: true,
      data: coupon,
      message: 'Coupon updated successfully',
    });
  } catch (error) {
    console.error('Update coupon error:', error);
    res.status(500).json({ success: false, error: 'Failed to update coupon' });
  }
};

// =============================================================================
// DELETE COUPON
// =============================================================================

export const deleteCoupon = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const existing = await prisma.coupon.findUnique({ 
      where: { id },
      include: { _count: { select: { usages: true } } },
    });

    if (!existing) {
      res.status(404).json({ success: false, error: 'Coupon not found' });
      return;
    }

    if (existing._count.usages > 0) {
      // Soft delete by marking as inactive instead
      await prisma.coupon.update({
        where: { id },
        data: { status: 'INACTIVE' },
      });

      res.json({
        success: true,
        message: 'Coupon deactivated (has usage history)',
      });
      return;
    }

    await prisma.coupon.delete({ where: { id } });

    res.json({
      success: true,
      message: 'Coupon deleted successfully',
    });
  } catch (error) {
    console.error('Delete coupon error:', error);
    res.status(500).json({ success: false, error: 'Failed to delete coupon' });
  }
};

// =============================================================================
// VALIDATE COUPON
// =============================================================================

export const validateCoupon = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success: false, errors: errors.array() });
      return;
    }

    const data: ValidateCouponRequest = req.body;
    const result: CouponValidationResult = {
      valid: false,
      code: data.code,
    };

    // Find the coupon
    const coupon = await prisma.coupon.findUnique({
      where: { code: data.code.toUpperCase() },
      include: {
        usages: { where: { clientId: data.clientId } },
        _count: { select: { usages: true } },
      },
    });

    if (!coupon) {
      result.error = 'Invalid coupon code';
      res.json({ success: true, data: result });
      return;
    }

    // Check status
    if (coupon.status !== 'ACTIVE') {
      result.error = `Coupon is ${coupon.status.toLowerCase()}`;
      res.json({ success: true, data: result });
      return;
    }

    // Check dates
    const now = new Date();
    if (coupon.startDate > now) {
      result.error = 'Coupon is not yet active';
      res.json({ success: true, data: result });
      return;
    }

    if (coupon.endDate && coupon.endDate < now) {
      result.error = 'Coupon has expired';
      res.json({ success: true, data: result });
      return;
    }

    // Check max uses
    if (coupon.maxUses && coupon._count.usages >= coupon.maxUses) {
      result.error = 'Coupon usage limit reached';
      res.json({ success: true, data: result });
      return;
    }

    // Check per-client usage
    if (coupon.maxUsesPerClient && coupon.usages.length >= coupon.maxUsesPerClient) {
      result.error = 'You have already used this coupon';
      res.json({ success: true, data: result });
      return;
    }

    // Check minimum order amount
    if (coupon.minOrderAmount && data.orderAmount < Number(coupon.minOrderAmount)) {
      result.error = `Minimum order amount is ${coupon.minOrderAmount}`;
      res.json({ success: true, data: result });
      return;
    }

    // Check applicable products
    if (coupon.applicableProducts.length > 0 && data.productId) {
      if (!coupon.applicableProducts.includes(data.productId)) {
        result.error = 'Coupon not applicable for this product';
        res.json({ success: true, data: result });
        return;
      }
    }

    // Check applicable license types
    if (coupon.applicableLicenseTypes.length > 0 && data.licenseTypeId) {
      if (!coupon.applicableLicenseTypes.includes(data.licenseTypeId)) {
        result.error = 'Coupon not applicable for this license type';
        res.json({ success: true, data: result });
        return;
      }
    }

    // Check applicable clients
    if (coupon.applicableClients.length > 0) {
      if (!coupon.applicableClients.includes(data.clientId)) {
        result.error = 'Coupon not available for your account';
        res.json({ success: true, data: result });
        return;
      }
    }

    // Check renewal applicability
    if (data.isRenewal && !coupon.isRenewalApplicable) {
      result.error = 'Coupon not applicable for renewals';
      res.json({ success: true, data: result });
      return;
    }

    // Check first purchase only
    if (coupon.isFirstPurchaseOnly) {
      // Check if client has previous orders/payments
      const previousPayments = await prisma.payment.count({
        where: { clientId: data.clientId, status: 'COMPLETED' },
      });
      if (previousPayments > 0) {
        result.error = 'Coupon only valid for first purchase';
        res.json({ success: true, data: result });
        return;
      }
    }

    // Calculate discount
    let discountAmount = 0;
    if (coupon.type === 'PERCENTAGE') {
      discountAmount = data.orderAmount * (Number(coupon.value) / 100);
      if (coupon.maxDiscount && discountAmount > Number(coupon.maxDiscount)) {
        discountAmount = Number(coupon.maxDiscount);
      }
    } else if (coupon.type === 'FIXED_AMOUNT') {
      discountAmount = Math.min(Number(coupon.value), data.orderAmount);
    }

    result.valid = true;
    result.couponId = coupon.id;
    result.discountType = coupon.type;
    result.discountValue = Number(coupon.value);
    result.discountAmount = Math.round(discountAmount * 100) / 100;
    result.message = `Coupon applied! You save ${discountAmount.toFixed(2)}`;

    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Validate coupon error:', error);
    res.status(500).json({ success: false, error: 'Failed to validate coupon' });
  }
};

// =============================================================================
// APPLY COUPON (Record usage)
// =============================================================================

export const applyCoupon = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { code, clientId, clientName, orderId, invoiceId, subscriptionId, discountAmount } = req.body;

    const coupon = await prisma.coupon.findUnique({
      where: { code: code.toUpperCase() },
    });

    if (!coupon) {
      res.status(404).json({ success: false, error: 'Coupon not found' });
      return;
    }

    // Record usage
    const usage = await prisma.couponUsage.create({
      data: {
        couponId: coupon.id,
        clientId,
        clientName,
        orderId,
        invoiceId,
        subscriptionId,
        discountAmount,
      },
    });

    // Increment current uses
    await prisma.coupon.update({
      where: { id: coupon.id },
      data: { currentUses: { increment: 1 } },
    });

    // Publish event
    await publishCouponApplied({
      couponId: coupon.id,
      couponCode: coupon.code,
      clientId,
      orderId,
      invoiceId,
      discountAmount,
    });

    res.json({
      success: true,
      data: usage,
      message: 'Coupon usage recorded',
    });
  } catch (error) {
    console.error('Apply coupon error:', error);
    res.status(500).json({ success: false, error: 'Failed to apply coupon' });
  }
};

// =============================================================================
// GET COUPON STATS
// =============================================================================

export const getCouponStats = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const [
      totalCount,
      statusCounts,
      typeCounts,
      totalDiscount,
    ] = await Promise.all([
      prisma.coupon.count(),
      prisma.coupon.groupBy({
        by: ['status'],
        _count: { id: true },
      }),
      prisma.coupon.groupBy({
        by: ['type'],
        _count: { id: true },
      }),
      prisma.couponUsage.aggregate({
        _sum: { discountAmount: true },
        _count: { id: true },
      }),
    ]);

    const statusMap: Record<string, number> = {};
    statusCounts.forEach(s => {
      statusMap[s.status] = s._count.id;
    });

    const typeMap: Record<string, number> = {};
    typeCounts.forEach(t => {
      typeMap[t.type] = t._count.id;
    });

    res.json({
      success: true,
      data: {
        total: totalCount,
        byStatus: {
          active: statusMap['ACTIVE'] || 0,
          inactive: statusMap['INACTIVE'] || 0,
          expired: statusMap['EXPIRED'] || 0,
          exhausted: statusMap['EXHAUSTED'] || 0,
        },
        byType: {
          percentage: typeMap['PERCENTAGE'] || 0,
          fixedAmount: typeMap['FIXED_AMOUNT'] || 0,
          freeTrial: typeMap['FREE_TRIAL'] || 0,
          firstMonthFree: typeMap['FIRST_MONTH_FREE'] || 0,
        },
        usage: {
          totalUsages: totalDiscount._count.id,
          totalDiscountGiven: Number(totalDiscount._sum.discountAmount || 0),
        },
      },
    });
  } catch (error) {
    console.error('Get coupon stats error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch coupon stats' });
  }
};

export default {
  getAllCoupons,
  getCouponById,
  createCoupon,
  updateCoupon,
  deleteCoupon,
  validateCoupon,
  applyCoupon,
  getCouponStats,
};
