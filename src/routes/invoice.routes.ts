// Invoice Routes
// Endpoints for invoice management

import { Router } from 'express';
import { body, query, param } from 'express-validator';
import { authenticate } from '../middleware/auth';
import { validate } from '../middleware/validate';
import {
  getAllInvoices,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  sendInvoice,
  markInvoicePaid,
  getInvoiceStats,
} from '../controllers/invoice.controller';

const router = Router();

// =============================================================================
// VALIDATION RULES
// =============================================================================

const createInvoiceValidation = [
  body('clientId').notEmpty().withMessage('Client ID is required'),
  body('clientName').notEmpty().withMessage('Client name is required'),
  body('dueDate').isISO8601().withMessage('Valid due date is required'),
  body('items').isArray({ min: 1 }).withMessage('At least one item is required'),
  body('items.*.productName').notEmpty().withMessage('Product name is required for each item'),
  body('items.*.quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1'),
  body('items.*.unitPrice').isFloat({ min: 0 }).withMessage('Unit price must be a positive number'),
];

const updateInvoiceValidation = [
  body('dueDate').optional().isISO8601().withMessage('Valid due date is required'),
  body('discountPercent').optional().isFloat({ min: 0, max: 100 }).withMessage('Discount must be 0-100'),
  body('taxPercent').optional().isFloat({ min: 0 }).withMessage('Tax percent must be positive'),
];

const sendInvoiceValidation = [
  body('recipientEmail').optional().isEmail().withMessage('Valid email is required'),
];

const markPaidValidation = [
  body('paidAmount').optional().isFloat({ min: 0 }).withMessage('Paid amount must be positive'),
  body('paidAt').optional().isISO8601().withMessage('Valid date is required'),
];

const listQueryValidation = [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be 1-100'),
  query('status').optional().isIn(['DRAFT', 'PENDING', 'SENT', 'PARTIALLY_PAID', 'PAID', 'OVERDUE', 'CANCELLED', 'REFUNDED']).withMessage('Invalid status'),
];

// =============================================================================
// ROUTES
// =============================================================================

// Get invoice stats
router.get('/stats', authenticate, getInvoiceStats);

// List all invoices
router.get('/', authenticate, validate(listQueryValidation), getAllInvoices);

// Get invoice by ID
router.get('/:id', authenticate, validate([param('id').notEmpty()]), getInvoiceById);

// Create invoice
router.post('/', authenticate, validate(createInvoiceValidation), createInvoice);

// Update invoice
router.put('/:id', authenticate, validate(updateInvoiceValidation), updateInvoice);

// Delete invoice
router.delete('/:id', authenticate, validate([param('id').notEmpty()]), deleteInvoice);

// Send invoice
router.post('/:id/send', authenticate, validate(sendInvoiceValidation), sendInvoice);

// Mark invoice as paid
router.post('/:id/mark-paid', authenticate, validate(markPaidValidation), markInvoicePaid);

export default router;
