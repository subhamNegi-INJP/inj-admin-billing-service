// Payment Routes
// Endpoints for payment management

import { Router } from 'express';
import { body, query, param } from 'express-validator';
import { authenticate } from '../middleware/auth';
import { validate } from '../middleware/validate';
import {
  getAllPayments,
  getPaymentById,
  createPayment,
  processPayment,
  failPayment,
  refundPayment,
  getPaymentStats,
} from '../controllers/payment.controller';

const router = Router();

// =============================================================================
// VALIDATION RULES
// =============================================================================

const createPaymentValidation = [
  body('clientId').notEmpty().withMessage('Client ID is required'),
  body('clientName').notEmpty().withMessage('Client name is required'),
  body('amount').isFloat({ min: 0.01 }).withMessage('Amount must be greater than 0'),
  body('method').notEmpty().isIn([
    'CREDIT_CARD', 'DEBIT_CARD', 'BANK_TRANSFER', 'UPI', 
    'NET_BANKING', 'WALLET', 'CHEQUE', 'CASH', 
    'RAZORPAY', 'STRIPE', 'PAYPAL', 'OTHER'
  ]).withMessage('Valid payment method is required'),
];

const processPaymentValidation = [
  body('gatewayTxnId').optional().isString(),
  body('gatewayPaymentId').optional().isString(),
];

const refundPaymentValidation = [
  body('reason').notEmpty().withMessage('Refund reason is required'),
  body('amount').optional().isFloat({ min: 0.01 }).withMessage('Amount must be greater than 0'),
];

const failPaymentValidation = [
  body('failureReason').optional().isString(),
  body('failureCode').optional().isString(),
];

const listQueryValidation = [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be 1-100'),
  query('status').optional().isIn([
    'PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 
    'REFUNDED', 'PARTIALLY_REFUNDED', 'CANCELLED', 'DISPUTED'
  ]).withMessage('Invalid status'),
];

// =============================================================================
// ROUTES
// =============================================================================

// Get payment stats
router.get('/stats', authenticate, getPaymentStats);

// List all payments
router.get('/', authenticate, validate(listQueryValidation), getAllPayments);

// Get payment by ID
router.get('/:id', authenticate, validate([param('id').notEmpty()]), getPaymentById);

// Create payment
router.post('/', authenticate, validate(createPaymentValidation), createPayment);

// Process payment (mark as completed)
router.post('/:id/process', authenticate, validate(processPaymentValidation), processPayment);

// Fail payment
router.post('/:id/fail', authenticate, validate(failPaymentValidation), failPayment);

// Refund payment
router.post('/:id/refund', authenticate, validate(refundPaymentValidation), refundPayment);

export default router;
