// Coupon Routes
// Endpoints for coupon management

import { Router } from 'express';
import { body, query, param } from 'express-validator';
import { authenticate } from '../middleware/auth';
import { validate } from '../middleware/validate';
import {
  getAllCoupons,
  getCouponById,
  createCoupon,
  updateCoupon,
  deleteCoupon,
  validateCoupon,
  applyCoupon,
  getCouponStats,
} from '../controllers/coupon.controller';

const router = Router();

// =============================================================================
// VALIDATION RULES
// =============================================================================

const createCouponValidation = [
  body('code').notEmpty().isLength({ min: 3, max: 30 }).withMessage('Code must be 3-30 characters'),
  body('name').notEmpty().withMessage('Name is required'),
  body('type').isIn(['PERCENTAGE', 'FIXED_AMOUNT', 'FREE_TRIAL', 'FIRST_MONTH_FREE']).withMessage('Invalid coupon type'),
  body('value').isFloat({ min: 0 }).withMessage('Value must be a positive number'),
  body('maxDiscount').optional().isFloat({ min: 0 }).withMessage('Max discount must be positive'),
  body('minOrderAmount').optional().isFloat({ min: 0 }).withMessage('Min order amount must be positive'),
  body('startDate').optional().isISO8601().withMessage('Valid start date required'),
  body('endDate').optional().isISO8601().withMessage('Valid end date required'),
  body('maxUses').optional().isInt({ min: 1 }).withMessage('Max uses must be at least 1'),
  body('maxUsesPerClient').optional().isInt({ min: 1 }).withMessage('Max uses per client must be at least 1'),
];

const updateCouponValidation = [
  body('value').optional().isFloat({ min: 0 }).withMessage('Value must be a positive number'),
  body('maxDiscount').optional().isFloat({ min: 0 }).withMessage('Max discount must be positive'),
  body('status').optional().isIn(['ACTIVE', 'INACTIVE', 'EXPIRED', 'EXHAUSTED']).withMessage('Invalid status'),
  body('endDate').optional().isISO8601().withMessage('Valid end date required'),
];

const validateCouponValidation = [
  body('code').notEmpty().withMessage('Coupon code is required'),
  body('clientId').notEmpty().withMessage('Client ID is required'),
  body('orderAmount').isFloat({ min: 0 }).withMessage('Order amount must be positive'),
];

const applyCouponValidation = [
  body('code').notEmpty().withMessage('Coupon code is required'),
  body('clientId').notEmpty().withMessage('Client ID is required'),
  body('clientName').notEmpty().withMessage('Client name is required'),
  body('discountAmount').isFloat({ min: 0 }).withMessage('Discount amount must be positive'),
];

const listQueryValidation = [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be 1-100'),
  query('status').optional().isIn(['ACTIVE', 'INACTIVE', 'EXPIRED', 'EXHAUSTED']).withMessage('Invalid status'),
  query('type').optional().isIn(['PERCENTAGE', 'FIXED_AMOUNT', 'FREE_TRIAL', 'FIRST_MONTH_FREE']).withMessage('Invalid type'),
];

// =============================================================================
// ROUTES
// =============================================================================

// Get coupon stats
router.get('/stats', authenticate, getCouponStats);

// Validate coupon (check if applicable)
router.post('/validate', authenticate, validate(validateCouponValidation), validateCoupon);

// Apply coupon (record usage)
router.post('/apply', authenticate, validate(applyCouponValidation), applyCoupon);

// List all coupons
router.get('/', authenticate, validate(listQueryValidation), getAllCoupons);

// Get coupon by ID
router.get('/:id', authenticate, validate([param('id').notEmpty()]), getCouponById);

// Create coupon
router.post('/', authenticate, validate(createCouponValidation), createCoupon);

// Update coupon
router.put('/:id', authenticate, validate(updateCouponValidation), updateCoupon);

// Delete coupon
router.delete('/:id', authenticate, validate([param('id').notEmpty()]), deleteCoupon);

export default router;
