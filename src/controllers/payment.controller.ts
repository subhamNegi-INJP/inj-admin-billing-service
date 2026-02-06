// Payment Controller
// Handles payment CRUD, processing, and refunds

import { Response } from 'express';
import { validationResult } from 'express-validator';
import prisma from '../utils/prisma';
import { 
  AuthenticatedRequest, 
  CreatePaymentRequest, 
  ProcessPaymentRequest,
  RefundPaymentRequest 
} from '../types';
import { 
  publishPaymentInitiated, 
  publishPaymentCompleted,
  publishPaymentFailed,
  publishPaymentRefunded 
} from '../events/publisher';

// =============================================================================
// GENERATE PAYMENT NUMBER
// =============================================================================

const generatePaymentNumber = async (): Promise<string> => {
  const year = new Date().getFullYear();
  const prefix = `PAY-${year}`;
  
  const lastPayment = await prisma.payment.findFirst({
    where: { paymentNumber: { startsWith: prefix } },
    orderBy: { paymentNumber: 'desc' },
  });

  let nextNumber = 1;
  if (lastPayment) {
    const lastNumber = parseInt(lastPayment.paymentNumber.split('-').pop() || '0', 10);
    nextNumber = lastNumber + 1;
  }

  return `${prefix}-${String(nextNumber).padStart(5, '0')}`;
};

// =============================================================================
// GET ALL PAYMENTS
// =============================================================================

export const getAllPayments = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { 
      page = '1', 
      limit = '20', 
      status, 
      clientId,
      invoiceId,
      method,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      fromDate,
      toDate
    } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    const where: Record<string, unknown> = {};

    if (status) where.status = status;
    if (clientId) where.clientId = clientId;
    if (invoiceId) where.invoiceId = invoiceId;
    if (method) where.method = method;
    if (search) {
      where.OR = [
        { paymentNumber: { contains: search as string, mode: 'insensitive' } },
        { clientName: { contains: search as string, mode: 'insensitive' } },
        { gatewayTxnId: { contains: search as string, mode: 'insensitive' } },
      ];
    }
    if (fromDate || toDate) {
      where.createdAt = {};
      if (fromDate) (where.createdAt as Record<string, unknown>).gte = new Date(fromDate as string);
      if (toDate) (where.createdAt as Record<string, unknown>).lte = new Date(toDate as string);
    }

    const [payments, total] = await Promise.all([
      prisma.payment.findMany({
        where,
        include: { invoice: { select: { invoiceNumber: true } } },
        orderBy: { [sortBy as string]: sortOrder },
        skip,
        take: limitNum,
      }),
      prisma.payment.count({ where }),
    ]);

    res.json({
      success: true,
      data: payments.map(payment => ({
        ...payment,
        amount: Number(payment.amount),
        refundedAmount: Number(payment.refundedAmount),
        invoiceNumber: payment.invoice?.invoiceNumber,
      })),
      meta: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    console.error('Get all payments error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch payments' });
  }
};

// =============================================================================
// GET PAYMENT BY ID
// =============================================================================

export const getPaymentById = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const payment = await prisma.payment.findUnique({
      where: { id },
      include: { 
        invoice: { 
          select: { 
            invoiceNumber: true, 
            totalAmount: true, 
            status: true 
          } 
        } 
      },
    });

    if (!payment) {
      res.status(404).json({ success: false, error: 'Payment not found' });
      return;
    }

    res.json({
      success: true,
      data: {
        ...payment,
        amount: Number(payment.amount),
        refundedAmount: Number(payment.refundedAmount),
      },
    });
  } catch (error) {
    console.error('Get payment by ID error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch payment' });
  }
};

// =============================================================================
// CREATE PAYMENT
// =============================================================================

export const createPayment = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success: false, errors: errors.array() });
      return;
    }

    const data: CreatePaymentRequest = req.body;
    const paymentNumber = await generatePaymentNumber();

    // Validate invoice if provided
    if (data.invoiceId) {
      const invoice = await prisma.invoice.findUnique({ where: { id: data.invoiceId } });
      if (!invoice) {
        res.status(400).json({ success: false, error: 'Invoice not found' });
        return;
      }
      if (invoice.status === 'PAID' || invoice.status === 'CANCELLED') {
        res.status(400).json({ 
          success: false, 
          error: `Invoice is already ${invoice.status.toLowerCase()}` 
        });
        return;
      }
    }

    const payment = await prisma.payment.create({
      data: {
        paymentNumber,
        clientId: data.clientId,
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        invoiceId: data.invoiceId,
        orderId: data.orderId,
        subscriptionId: data.subscriptionId,
        amount: data.amount,
        currency: data.currency || 'INR',
        method: data.method as any,
        status: 'PENDING',
        gatewayName: data.gatewayName,
        gatewayOrderId: data.gatewayOrderId,
        bankName: data.bankName,
        bankAccount: data.bankAccount,
        bankReference: data.bankReference,
        chequeNumber: data.chequeNumber,
        chequeDate: data.chequeDate ? new Date(data.chequeDate) : undefined,
        chequeBank: data.chequeBank,
        notes: data.notes,
        createdById: req.user?.userId,
        createdByName: req.user?.email,
      },
    });

    // Publish event
    await publishPaymentInitiated({
      paymentId: payment.id,
      paymentNumber: payment.paymentNumber,
      clientId: payment.clientId,
      amount: Number(payment.amount),
      method: payment.method,
    });

    res.status(201).json({
      success: true,
      data: payment,
      message: 'Payment created successfully',
    });
  } catch (error) {
    console.error('Create payment error:', error);
    res.status(500).json({ success: false, error: 'Failed to create payment' });
  }
};

// =============================================================================
// PROCESS PAYMENT
// =============================================================================

export const processPayment = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data: ProcessPaymentRequest = req.body;

    const payment = await prisma.payment.findUnique({ 
      where: { id },
      include: { invoice: true },
    });

    if (!payment) {
      res.status(404).json({ success: false, error: 'Payment not found' });
      return;
    }

    if (payment.status !== 'PENDING' && payment.status !== 'PROCESSING') {
      res.status(400).json({ 
        success: false, 
        error: `Payment cannot be processed in ${payment.status} status` 
      });
      return;
    }

    // Update payment to completed
    const updatedPayment = await prisma.payment.update({
      where: { id },
      data: {
        status: 'COMPLETED',
        gatewayTxnId: data.gatewayTxnId,
        gatewayPaymentId: data.gatewayPaymentId,
        gatewayResponse: data.gatewayResponse as object | undefined,
        processedAt: new Date(),
        processedById: req.user?.userId,
        processedByName: req.user?.email,
        notes: data.notes || payment.notes,
      },
    });

    // Update invoice if linked
    if (payment.invoice) {
      const newPaidAmount = Number(payment.invoice.paidAmount) + Number(payment.amount);
      const balanceAmount = Number(payment.invoice.totalAmount) - newPaidAmount;
      const newStatus = balanceAmount <= 0 ? 'PAID' : 'PARTIALLY_PAID';

      await prisma.invoice.update({
        where: { id: payment.invoiceId! },
        data: {
          status: newStatus,
          paidAmount: newPaidAmount,
          balanceAmount: Math.max(0, balanceAmount),
          paidAt: newStatus === 'PAID' ? new Date() : undefined,
        },
      });
    }

    // Publish event
    await publishPaymentCompleted({
      paymentId: updatedPayment.id,
      paymentNumber: updatedPayment.paymentNumber,
      clientId: updatedPayment.clientId,
      invoiceId: updatedPayment.invoiceId || undefined,
      orderId: updatedPayment.orderId || undefined,
      subscriptionId: updatedPayment.subscriptionId || undefined,
      amount: Number(updatedPayment.amount),
      gatewayTxnId: updatedPayment.gatewayTxnId || undefined,
    });

    res.json({
      success: true,
      data: updatedPayment,
      message: 'Payment processed successfully',
    });
  } catch (error) {
    console.error('Process payment error:', error);
    res.status(500).json({ success: false, error: 'Failed to process payment' });
  }
};

// =============================================================================
// FAIL PAYMENT
// =============================================================================

export const failPayment = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { failureReason, failureCode } = req.body;

    const payment = await prisma.payment.findUnique({ where: { id } });

    if (!payment) {
      res.status(404).json({ success: false, error: 'Payment not found' });
      return;
    }

    if (payment.status !== 'PENDING' && payment.status !== 'PROCESSING') {
      res.status(400).json({ 
        success: false, 
        error: `Cannot mark payment as failed in ${payment.status} status` 
      });
      return;
    }

    const updatedPayment = await prisma.payment.update({
      where: { id },
      data: {
        status: 'FAILED',
        failureReason,
        failureCode,
        processedAt: new Date(),
      },
    });

    // Publish event
    await publishPaymentFailed({
      paymentId: updatedPayment.id,
      paymentNumber: updatedPayment.paymentNumber,
      clientId: updatedPayment.clientId,
      amount: Number(updatedPayment.amount),
      failureReason,
      failureCode,
    });

    res.json({
      success: true,
      data: updatedPayment,
      message: 'Payment marked as failed',
    });
  } catch (error) {
    console.error('Fail payment error:', error);
    res.status(500).json({ success: false, error: 'Failed to update payment' });
  }
};

// =============================================================================
// REFUND PAYMENT
// =============================================================================

export const refundPayment = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data: RefundPaymentRequest = req.body;

    const payment = await prisma.payment.findUnique({ 
      where: { id },
      include: { invoice: true },
    });

    if (!payment) {
      res.status(404).json({ success: false, error: 'Payment not found' });
      return;
    }

    if (payment.status !== 'COMPLETED') {
      res.status(400).json({ 
        success: false, 
        error: 'Can only refund completed payments' 
      });
      return;
    }

    const refundAmount = data.amount || Number(payment.amount);
    const totalRefunded = Number(payment.refundedAmount) + refundAmount;

    if (totalRefunded > Number(payment.amount)) {
      res.status(400).json({ 
        success: false, 
        error: 'Refund amount exceeds payment amount' 
      });
      return;
    }

    const isFullRefund = totalRefunded >= Number(payment.amount);

    const updatedPayment = await prisma.payment.update({
      where: { id },
      data: {
        status: isFullRefund ? 'REFUNDED' : 'PARTIALLY_REFUNDED',
        refundedAmount: totalRefunded,
        refundReason: data.reason,
        refundedAt: new Date(),
        refundedById: req.user?.userId,
        refundedByName: req.user?.email,
        notes: data.notes ? `${payment.notes || ''}\nRefund: ${data.notes}` : payment.notes,
      },
    });

    // Update invoice if linked
    if (payment.invoice) {
      const newPaidAmount = Math.max(0, Number(payment.invoice.paidAmount) - refundAmount);
      const balanceAmount = Number(payment.invoice.totalAmount) - newPaidAmount;
      
      let newStatus = payment.invoice.status;
      if (isFullRefund && Number(payment.invoice.paidAmount) === Number(payment.amount)) {
        newStatus = 'REFUNDED';
      } else if (newPaidAmount > 0 && newPaidAmount < Number(payment.invoice.totalAmount)) {
        newStatus = 'PARTIALLY_PAID';
      } else if (newPaidAmount === 0) {
        newStatus = 'PENDING';
      }

      await prisma.invoice.update({
        where: { id: payment.invoiceId! },
        data: {
          status: newStatus,
          paidAmount: newPaidAmount,
          balanceAmount,
        },
      });
    }

    // Publish event
    await publishPaymentRefunded({
      paymentId: updatedPayment.id,
      paymentNumber: updatedPayment.paymentNumber,
      clientId: updatedPayment.clientId,
      refundAmount,
      reason: data.reason,
    });

    res.json({
      success: true,
      data: updatedPayment,
      message: isFullRefund ? 'Payment fully refunded' : 'Partial refund processed',
    });
  } catch (error) {
    console.error('Refund payment error:', error);
    res.status(500).json({ success: false, error: 'Failed to process refund' });
  }
};

// =============================================================================
// GET PAYMENT STATS
// =============================================================================

export const getPaymentStats = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const [
      totalCount,
      statusCounts,
      amountStats,
      methodCounts,
    ] = await Promise.all([
      prisma.payment.count(),
      prisma.payment.groupBy({
        by: ['status'],
        _count: { id: true },
      }),
      prisma.payment.aggregate({
        _sum: { amount: true, refundedAmount: true },
        where: { status: 'COMPLETED' },
      }),
      prisma.payment.groupBy({
        by: ['method'],
        _count: { id: true },
        _sum: { amount: true },
        where: { status: 'COMPLETED' },
      }),
    ]);

    const statusMap: Record<string, number> = {};
    statusCounts.forEach(s => {
      statusMap[s.status] = s._count.id;
    });

    res.json({
      success: true,
      data: {
        total: totalCount,
        byStatus: {
          pending: statusMap['PENDING'] || 0,
          processing: statusMap['PROCESSING'] || 0,
          completed: statusMap['COMPLETED'] || 0,
          failed: statusMap['FAILED'] || 0,
          refunded: statusMap['REFUNDED'] || 0,
          partiallyRefunded: statusMap['PARTIALLY_REFUNDED'] || 0,
        },
        amounts: {
          totalCollected: Number(amountStats._sum.amount || 0),
          totalRefunded: Number(amountStats._sum.refundedAmount || 0),
          netCollected: Number(amountStats._sum.amount || 0) - Number(amountStats._sum.refundedAmount || 0),
        },
        byMethod: methodCounts.map(m => ({
          method: m.method,
          count: m._count.id,
          totalAmount: Number(m._sum.amount || 0),
        })),
      },
    });
  } catch (error) {
    console.error('Get payment stats error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch payment stats' });
  }
};

export default {
  getAllPayments,
  getPaymentById,
  createPayment,
  processPayment,
  failPayment,
  refundPayment,
  getPaymentStats,
};
