// Invoice Controller
// Handles invoice CRUD, sending, and payment marking

import { Response } from 'express';
import { validationResult } from 'express-validator';
import prisma from '../utils/prisma';
import { 
  AuthenticatedRequest, 
  CreateInvoiceRequest, 
  UpdateInvoiceRequest,
  SendInvoiceRequest,
  MarkPaidRequest 
} from '../types';
import { 
  publishInvoiceCreated, 
  publishInvoiceSent, 
  publishInvoicePaid 
} from '../events/publisher';

// =============================================================================
// GENERATE INVOICE NUMBER
// =============================================================================

const generateInvoiceNumber = async (): Promise<string> => {
  const year = new Date().getFullYear();
  const prefix = `INV-${year}`;
  
  const lastInvoice = await prisma.invoice.findFirst({
    where: { invoiceNumber: { startsWith: prefix } },
    orderBy: { invoiceNumber: 'desc' },
  });

  let nextNumber = 1;
  if (lastInvoice) {
    const lastNumber = parseInt(lastInvoice.invoiceNumber.split('-').pop() || '0', 10);
    nextNumber = lastNumber + 1;
  }

  return `${prefix}-${String(nextNumber).padStart(5, '0')}`;
};

// =============================================================================
// CALCULATE TOTALS
// =============================================================================

const calculateItemTotals = (
  quantity: number,
  unitPrice: number,
  discountPercent: number = 0,
  taxPercent: number = 18
) => {
  const subtotal = quantity * unitPrice;
  const discountAmount = subtotal * (discountPercent / 100);
  const taxableAmount = subtotal - discountAmount;
  const taxAmount = taxableAmount * (taxPercent / 100);
  const total = taxableAmount + taxAmount;

  return { subtotal, discountAmount, taxAmount, total };
};

// =============================================================================
// GET ALL INVOICES
// =============================================================================

export const getAllInvoices = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  console.log('[Invoice Controller] getAllInvoices called with query:', req.query);
  try {
    const { 
      page = '1', 
      limit = '20', 
      status, 
      clientId, 
      search,
      sortBy = 'invoiceDate',
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
    if (search) {
      where.OR = [
        { invoiceNumber: { contains: search as string, mode: 'insensitive' } },
        { clientName: { contains: search as string, mode: 'insensitive' } },
        { clientEmail: { contains: search as string, mode: 'insensitive' } },
      ];
    }
    if (fromDate || toDate) {
      where.invoiceDate = {};
      if (fromDate) (where.invoiceDate as Record<string, unknown>).gte = new Date(fromDate as string);
      if (toDate) (where.invoiceDate as Record<string, unknown>).lte = new Date(toDate as string);
    }

    console.log('[Invoice Controller] Querying database with where:', where);
    const [invoices, total] = await Promise.all([
      prisma.invoice.findMany({
        where,
        include: { 
          items: true,
          _count: { select: { payments: true } }
        },
        orderBy: { [sortBy as string]: sortOrder },
        skip,
        take: limitNum,
      }),
      prisma.invoice.count({ where }),
    ]);

    console.log('[Invoice Controller] Found', invoices.length, 'invoices, total:', total);

    res.json({
      success: true,
      data: invoices.map(invoice => ({
        ...invoice,
        // Alias invoiceDate as issueDate for frontend compatibility
        issueDate: invoice.invoiceDate,
        subtotal: Number(invoice.subtotal),
        discountAmount: Number(invoice.discountAmount),
        couponDiscount: Number(invoice.couponDiscount),
        taxAmount: Number(invoice.taxAmount),
        totalAmount: Number(invoice.totalAmount),
        paidAmount: Number(invoice.paidAmount),
        balanceAmount: Number(invoice.balanceAmount),
        itemCount: invoice.items.length,
        paymentCount: invoice._count.payments,
        // Include serialized items for bill details display
        items: invoice.items.map(item => ({
          ...item,
          unitPrice: Number(item.unitPrice),
          subtotal: Number(item.subtotal),
          discountAmount: Number(item.discountAmount),
          taxAmount: Number(item.taxAmount),
          total: Number(item.total),
        })),
      })),
      meta: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    console.error('Get all invoices error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch invoices' });
  }
};

// =============================================================================
// GET INVOICE BY ID
// =============================================================================

export const getInvoiceById = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const invoice = await prisma.invoice.findUnique({
      where: { id },
      include: {
        items: true,
        payments: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!invoice) {
      res.status(404).json({ success: false, error: 'Invoice not found' });
      return;
    }

    res.json({
      success: true,
      data: {
        ...invoice,
        // Alias invoiceDate as issueDate for frontend compatibility
        issueDate: invoice.invoiceDate,
        subtotal: Number(invoice.subtotal),
        discountAmount: Number(invoice.discountAmount),
        couponDiscount: Number(invoice.couponDiscount),
        taxAmount: Number(invoice.taxAmount),
        totalAmount: Number(invoice.totalAmount),
        paidAmount: Number(invoice.paidAmount),
        balanceAmount: Number(invoice.balanceAmount),
        items: invoice.items.map(item => ({
          ...item,
          unitPrice: Number(item.unitPrice),
          discountAmount: Number(item.discountAmount),
          taxAmount: Number(item.taxAmount),
          subtotal: Number(item.subtotal),
          total: Number(item.total),
        })),
        payments: invoice.payments.map(payment => ({
          ...payment,
          amount: Number(payment.amount),
          refundedAmount: Number(payment.refundedAmount),
        })),
      },
    });
  } catch (error) {
    console.error('Get invoice by ID error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch invoice' });
  }
};

// =============================================================================
// CREATE INVOICE
// =============================================================================

export const createInvoice = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success: false, errors: errors.array() });
      return;
    }

    const data: CreateInvoiceRequest = req.body;
    const invoiceNumber = await generateInvoiceNumber();

    // Calculate item totals
    const itemsWithTotals = data.items.map(item => {
      const totals = calculateItemTotals(
        item.quantity,
        item.unitPrice,
        item.discountPercent || 0,
        item.taxPercent || 18
      );
      return { ...item, ...totals };
    });

    // Calculate invoice totals
    const subtotal = itemsWithTotals.reduce((sum, item) => sum + item.subtotal, 0);
    const itemDiscountTotal = itemsWithTotals.reduce((sum, item) => sum + item.discountAmount, 0);
    const discountAmount = (data.discountAmount || 0) + itemDiscountTotal;
    const taxAmount = itemsWithTotals.reduce((sum, item) => sum + item.taxAmount, 0);
    const totalAmount = subtotal - discountAmount + taxAmount;

    const invoice = await prisma.invoice.create({
      data: {
        invoiceNumber,
        clientId: data.clientId,
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        clientPhone: data.clientPhone,
        clientCompany: data.clientCompany,
        billingAddress: data.billingAddress,
        billingCity: data.billingCity,
        billingState: data.billingState,
        billingCountry: data.billingCountry || 'India',
        billingZipCode: data.billingZipCode,
        gstin: data.gstin,
        orderId: data.orderId,
        orderNumber: data.orderNumber,
        subscriptionId: data.subscriptionId,
        dueDate: new Date(data.dueDate),
        periodStart: data.periodStart ? new Date(data.periodStart) : undefined,
        periodEnd: data.periodEnd ? new Date(data.periodEnd) : undefined,
        subtotal,
        discountPercent: data.discountPercent || 0,
        discountAmount,
        couponCode: data.couponCode,
        taxPercent: data.taxPercent || 18,
        taxAmount,
        totalAmount,
        balanceAmount: totalAmount,
        notes: data.notes,
        termsAndConditions: data.termsAndConditions,
        createdById: req.user?.userId,
        createdByName: req.user?.email,
        items: {
          create: itemsWithTotals.map(item => ({
            productId: item.productId,
            productName: item.productName,
            productCode: item.productCode,
            licenseTypeId: item.licenseTypeId,
            licenseTypeName: item.licenseTypeName,
            description: item.description,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            discountPercent: item.discountPercent || 0,
            discountAmount: item.discountAmount,
            taxPercent: item.taxPercent || 18,
            taxAmount: item.taxAmount,
            subtotal: item.subtotal,
            total: item.total,
            periodStart: item.periodStart ? new Date(item.periodStart) : undefined,
            periodEnd: item.periodEnd ? new Date(item.periodEnd) : undefined,
          })),
        },
      },
      include: { items: true },
    });

    // Publish event
    await publishInvoiceCreated({
      invoiceId: invoice.id,
      invoiceNumber: invoice.invoiceNumber,
      clientId: invoice.clientId,
      totalAmount: Number(invoice.totalAmount),
    });

    res.status(201).json({
      success: true,
      data: invoice,
      message: 'Invoice created successfully',
    });
  } catch (error) {
    console.error('Create invoice error:', error);
    res.status(500).json({ success: false, error: 'Failed to create invoice' });
  }
};

// =============================================================================
// UPDATE INVOICE
// =============================================================================

export const updateInvoice = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success: false, errors: errors.array() });
      return;
    }

    const { id } = req.params;
    const data: UpdateInvoiceRequest = req.body;

    const existing = await prisma.invoice.findUnique({ where: { id } });
    if (!existing) {
      res.status(404).json({ success: false, error: 'Invoice not found' });
      return;
    }

    if (existing.status !== 'DRAFT' && existing.status !== 'PENDING') {
      res.status(400).json({ 
        success: false, 
        error: 'Cannot update invoice in current status' 
      });
      return;
    }

    const invoice = await prisma.invoice.update({
      where: { id },
      data: {
        ...data,
        dueDate: data.dueDate ? new Date(data.dueDate) : undefined,
        periodStart: data.periodStart ? new Date(data.periodStart) : undefined,
        periodEnd: data.periodEnd ? new Date(data.periodEnd) : undefined,
        updatedById: req.user?.userId,
        updatedByName: req.user?.email,
      },
      include: { items: true },
    });

    res.json({
      success: true,
      data: invoice,
      message: 'Invoice updated successfully',
    });
  } catch (error) {
    console.error('Update invoice error:', error);
    res.status(500).json({ success: false, error: 'Failed to update invoice' });
  }
};

// =============================================================================
// DELETE INVOICE
// =============================================================================

export const deleteInvoice = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const existing = await prisma.invoice.findUnique({ 
      where: { id },
      include: { payments: true },
    });

    if (!existing) {
      res.status(404).json({ success: false, error: 'Invoice not found' });
      return;
    }

    if (existing.status !== 'DRAFT') {
      res.status(400).json({ 
        success: false, 
        error: 'Can only delete draft invoices' 
      });
      return;
    }

    if (existing.payments.length > 0) {
      res.status(400).json({ 
        success: false, 
        error: 'Cannot delete invoice with payments' 
      });
      return;
    }

    await prisma.invoice.delete({ where: { id } });

    res.json({
      success: true,
      message: 'Invoice deleted successfully',
    });
  } catch (error) {
    console.error('Delete invoice error:', error);
    res.status(500).json({ success: false, error: 'Failed to delete invoice' });
  }
};

// =============================================================================
// SEND INVOICE
// =============================================================================

export const sendInvoice = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data: SendInvoiceRequest = req.body;

    const invoice = await prisma.invoice.findUnique({ where: { id } });

    if (!invoice) {
      res.status(404).json({ success: false, error: 'Invoice not found' });
      return;
    }

    if (invoice.status !== 'DRAFT' && invoice.status !== 'PENDING') {
      res.status(400).json({ 
        success: false, 
        error: 'Invoice already sent or in invalid status' 
      });
      return;
    }

    const recipientEmail = data.recipientEmail || invoice.clientEmail;
    if (!recipientEmail) {
      res.status(400).json({ 
        success: false, 
        error: 'Recipient email is required' 
      });
      return;
    }

    // TODO: Integrate with notification service to send email
    // For now, just update the status

    const updatedInvoice = await prisma.invoice.update({
      where: { id },
      data: {
        status: 'SENT',
        sentAt: new Date(),
        sentBy: req.user?.userId,
        sentByName: req.user?.email,
      },
    });

    // Publish event
    await publishInvoiceSent({
      invoiceId: updatedInvoice.id,
      invoiceNumber: updatedInvoice.invoiceNumber,
      clientId: updatedInvoice.clientId,
      clientEmail: recipientEmail,
      sentAt: updatedInvoice.sentAt!.toISOString(),
    });

    res.json({
      success: true,
      data: updatedInvoice,
      message: `Invoice sent to ${recipientEmail}`,
    });
  } catch (error) {
    console.error('Send invoice error:', error);
    res.status(500).json({ success: false, error: 'Failed to send invoice' });
  }
};

// =============================================================================
// MARK INVOICE AS PAID
// =============================================================================

export const markInvoicePaid = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data: MarkPaidRequest = req.body;

    const invoice = await prisma.invoice.findUnique({ where: { id } });

    if (!invoice) {
      res.status(404).json({ success: false, error: 'Invoice not found' });
      return;
    }

    if (invoice.status === 'PAID' || invoice.status === 'CANCELLED') {
      res.status(400).json({ 
        success: false, 
        error: `Invoice is already ${invoice.status.toLowerCase()}` 
      });
      return;
    }

    const paidAmount = data.paidAmount || Number(invoice.totalAmount);
    const newPaidTotal = Number(invoice.paidAmount) + paidAmount;
    const balanceAmount = Number(invoice.totalAmount) - newPaidTotal;

    const newStatus = balanceAmount <= 0 ? 'PAID' : 'PARTIALLY_PAID';

    const updatedInvoice = await prisma.invoice.update({
      where: { id },
      data: {
        status: newStatus,
        paidAmount: newPaidTotal,
        balanceAmount: Math.max(0, balanceAmount),
        paidAt: newStatus === 'PAID' ? (data.paidAt ? new Date(data.paidAt) : new Date()) : undefined,
      },
    });

    // Publish event if fully paid
    if (newStatus === 'PAID') {
      await publishInvoicePaid({
        invoiceId: updatedInvoice.id,
        invoiceNumber: updatedInvoice.invoiceNumber,
        clientId: updatedInvoice.clientId,
        totalAmount: Number(updatedInvoice.totalAmount),
        paidAmount: Number(updatedInvoice.paidAmount),
        paidAt: updatedInvoice.paidAt!.toISOString(),
      });
    }

    res.json({
      success: true,
      data: updatedInvoice,
      message: newStatus === 'PAID' ? 'Invoice marked as paid' : 'Partial payment recorded',
    });
  } catch (error) {
    console.error('Mark invoice paid error:', error);
    res.status(500).json({ success: false, error: 'Failed to mark invoice as paid' });
  }
};

// =============================================================================
// GET INVOICE STATS
// =============================================================================

export const getInvoiceStats = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const [
      totalCount,
      statusCounts,
      revenueStats,
    ] = await Promise.all([
      prisma.invoice.count(),
      prisma.invoice.groupBy({
        by: ['status'],
        _count: { id: true },
      }),
      prisma.invoice.aggregate({
        _sum: {
          totalAmount: true,
          paidAmount: true,
          balanceAmount: true,
        },
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
          draft: statusMap['DRAFT'] || 0,
          pending: statusMap['PENDING'] || 0,
          sent: statusMap['SENT'] || 0,
          partiallyPaid: statusMap['PARTIALLY_PAID'] || 0,
          paid: statusMap['PAID'] || 0,
          overdue: statusMap['OVERDUE'] || 0,
          cancelled: statusMap['CANCELLED'] || 0,
        },
        revenue: {
          totalInvoiced: Number(revenueStats._sum.totalAmount || 0),
          totalPaid: Number(revenueStats._sum.paidAmount || 0),
          totalPending: Number(revenueStats._sum.balanceAmount || 0),
        },
      },
    });
  } catch (error) {
    console.error('Get invoice stats error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch invoice stats' });
  }
};

export default {
  getAllInvoices,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  sendInvoice,
  markInvoicePaid,
  getInvoiceStats,
};
