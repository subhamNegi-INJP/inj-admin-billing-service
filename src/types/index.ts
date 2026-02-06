// Billing Service Types

import { Request } from 'express';

// =============================================================================
// AUTH TYPES
// =============================================================================

export interface Permission {
  resourceCode: string;
  action: string;
}

export interface JWTPayload {
  userId: string;
  email: string;
  roleId: string;
  roleName: string;
  permissions?: Permission[];
  iat?: number;
  exp?: number;
}

export interface AuthenticatedRequest extends Request {
  user?: JWTPayload;
  userId?: string;
  userType?: string;
}

// =============================================================================
// API RESPONSE TYPES
// =============================================================================

export interface ValidationError {
  field: string;
  message: string;
  value?: unknown;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  errors?: ValidationError[];
  message?: string;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
    totalPages?: number;
  };
}

// =============================================================================
// INVOICE TYPES
// =============================================================================

export interface CreateInvoiceRequest {
  clientId: string;
  clientName: string;
  clientEmail?: string;
  clientPhone?: string;
  clientCompany?: string;
  billingAddress?: string;
  billingCity?: string;
  billingState?: string;
  billingCountry?: string;
  billingZipCode?: string;
  gstin?: string;
  orderId?: string;
  orderNumber?: string;
  subscriptionId?: string;
  dueDate: string;
  periodStart?: string;
  periodEnd?: string;
  discountPercent?: number;
  discountAmount?: number;
  couponCode?: string;
  taxPercent?: number;
  notes?: string;
  termsAndConditions?: string;
  items: CreateInvoiceItemRequest[];
}

export interface CreateInvoiceItemRequest {
  productId?: string;
  productName: string;
  productCode?: string;
  licenseTypeId?: string;
  licenseTypeName?: string;
  description?: string;
  quantity: number;
  unitPrice: number;
  discountPercent?: number;
  taxPercent?: number;
  periodStart?: string;
  periodEnd?: string;
}

export interface UpdateInvoiceRequest {
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
  billingAddress?: string;
  billingCity?: string;
  billingState?: string;
  billingCountry?: string;
  billingZipCode?: string;
  gstin?: string;
  dueDate?: string;
  periodStart?: string;
  periodEnd?: string;
  discountPercent?: number;
  discountAmount?: number;
  couponCode?: string;
  taxPercent?: number;
  notes?: string;
  termsAndConditions?: string;
  internalNotes?: string;
}

export interface SendInvoiceRequest {
  recipientEmail?: string;
  subject?: string;
  message?: string;
  ccEmails?: string[];
}

export interface MarkPaidRequest {
  paymentId?: string;
  paymentMethod?: string;
  paidAmount?: number;
  paidAt?: string;
  notes?: string;
}

// =============================================================================
// PAYMENT TYPES
// =============================================================================

export interface CreatePaymentRequest {
  clientId: string;
  clientName: string;
  clientEmail?: string;
  invoiceId?: string;
  orderId?: string;
  subscriptionId?: string;
  amount: number;
  currency?: string;
  method: string;
  gatewayName?: string;
  gatewayOrderId?: string;
  bankName?: string;
  bankAccount?: string;
  bankReference?: string;
  chequeNumber?: string;
  chequeDate?: string;
  chequeBank?: string;
  notes?: string;
}

export interface ProcessPaymentRequest {
  gatewayTxnId?: string;
  gatewayPaymentId?: string;
  gatewayResponse?: Record<string, unknown>;
  notes?: string;
}

export interface RefundPaymentRequest {
  amount?: number;
  reason: string;
  notes?: string;
}

export interface InitiateGatewayPaymentRequest {
  invoiceId: string;
  gatewayName: string;
  returnUrl?: string;
  notifyUrl?: string;
}

// =============================================================================
// COUPON TYPES
// =============================================================================

export interface CreateCouponRequest {
  code: string;
  name: string;
  description?: string;
  type: 'PERCENTAGE' | 'FIXED_AMOUNT' | 'FREE_TRIAL' | 'FIRST_MONTH_FREE';
  value: number;
  maxDiscount?: number;
  minOrderAmount?: number;
  startDate?: string;
  endDate?: string;
  maxUses?: number;
  maxUsesPerClient?: number;
  applicableProducts?: string[];
  applicableLicenseTypes?: string[];
  applicableClients?: string[];
  isFirstPurchaseOnly?: boolean;
  isRenewalApplicable?: boolean;
  isStackable?: boolean;
}

export interface UpdateCouponRequest {
  name?: string;
  description?: string;
  value?: number;
  maxDiscount?: number;
  minOrderAmount?: number;
  status?: 'ACTIVE' | 'INACTIVE' | 'EXPIRED' | 'EXHAUSTED';
  endDate?: string;
  maxUses?: number;
  maxUsesPerClient?: number;
  applicableProducts?: string[];
  applicableLicenseTypes?: string[];
  applicableClients?: string[];
  isFirstPurchaseOnly?: boolean;
  isRenewalApplicable?: boolean;
  isStackable?: boolean;
}

export interface ValidateCouponRequest {
  code: string;
  clientId: string;
  orderAmount: number;
  productId?: string;
  licenseTypeId?: string;
  isRenewal?: boolean;
}

export interface CouponValidationResult {
  valid: boolean;
  couponId?: string;
  code: string;
  discountType?: string;
  discountValue?: number;
  discountAmount?: number;
  message?: string;
  error?: string;
}

// =============================================================================
// RESPONSE TYPES
// =============================================================================

export interface InvoiceSummary {
  id: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  status: string;
  totalAmount: number;
  paidAmount: number;
  balanceAmount: number;
  invoiceDate: string;
  dueDate: string;
  itemCount: number;
}

export interface InvoiceDetails extends InvoiceSummary {
  clientEmail?: string;
  clientPhone?: string;
  clientCompany?: string;
  billingAddress?: string;
  billingCity?: string;
  billingState?: string;
  billingCountry?: string;
  gstin?: string;
  orderId?: string;
  subscriptionId?: string;
  subtotal: number;
  discountAmount: number;
  couponDiscount: number;
  taxAmount: number;
  notes?: string;
  sentAt?: string;
  paidAt?: string;
  items: InvoiceItemDetails[];
  payments: PaymentSummary[];
}

export interface InvoiceItemDetails {
  id: string;
  productName: string;
  productCode?: string;
  licenseTypeName?: string;
  description?: string;
  quantity: number;
  unitPrice: number;
  discountAmount: number;
  taxAmount: number;
  subtotal: number;
  total: number;
}

export interface PaymentSummary {
  id: string;
  paymentNumber: string;
  clientId: string;
  clientName: string;
  amount: number;
  method: string;
  status: string;
  gatewayName?: string;
  gatewayTxnId?: string;
  createdAt: string;
  processedAt?: string;
}

export interface PaymentDetails extends PaymentSummary {
  clientEmail?: string;
  invoiceId?: string;
  orderId?: string;
  subscriptionId?: string;
  currency: string;
  refundedAmount: number;
  refundReason?: string;
  refundedAt?: string;
  failureReason?: string;
  failureCode?: string;
  notes?: string;
}

export interface CouponSummary {
  id: string;
  code: string;
  name: string;
  type: string;
  value: number;
  status: string;
  startDate: string;
  endDate?: string;
  currentUses: number;
  maxUses?: number;
}

export interface CouponDetails extends CouponSummary {
  description?: string;
  maxDiscount?: number;
  minOrderAmount?: number;
  maxUsesPerClient?: number;
  applicableProducts: string[];
  applicableLicenseTypes: string[];
  applicableClients: string[];
  isFirstPurchaseOnly: boolean;
  isRenewalApplicable: boolean;
  isStackable: boolean;
  createdAt: string;
}

// =============================================================================
// STATS TYPES
// =============================================================================

export interface BillingStats {
  invoices: {
    total: number;
    draft: number;
    pending: number;
    paid: number;
    overdue: number;
    cancelled: number;
  };
  payments: {
    total: number;
    completed: number;
    pending: number;
    failed: number;
    refunded: number;
  };
  revenue: {
    totalInvoiced: number;
    totalPaid: number;
    totalPending: number;
    totalOverdue: number;
  };
  coupons: {
    active: number;
    totalUsages: number;
    totalDiscountGiven: number;
  };
}

// =============================================================================
// EVENT TYPES
// =============================================================================

export interface InvoiceCreatedEvent {
  eventType: 'invoice.created';
  invoiceId: string;
  invoiceNumber: string;
  clientId: string;
  totalAmount: number;
}

export interface InvoiceSentEvent {
  eventType: 'invoice.sent';
  invoiceId: string;
  invoiceNumber: string;
  clientId: string;
  clientEmail: string;
  sentAt: string;
}

export interface InvoicePaidEvent {
  eventType: 'invoice.paid';
  invoiceId: string;
  invoiceNumber: string;
  clientId: string;
  totalAmount: number;
  paidAmount: number;
  paidAt: string;
}

export interface InvoiceOverdueEvent {
  eventType: 'invoice.overdue';
  invoiceId: string;
  invoiceNumber: string;
  clientId: string;
  totalAmount: number;
  dueDate: string;
  daysOverdue: number;
}

export interface PaymentInitiatedEvent {
  eventType: 'payment.initiated';
  paymentId: string;
  paymentNumber: string;
  clientId: string;
  amount: number;
  method: string;
}

export interface PaymentCompletedEvent {
  eventType: 'payment.completed';
  paymentId: string;
  paymentNumber: string;
  clientId: string;
  invoiceId?: string;
  orderId?: string;
  subscriptionId?: string;
  amount: number;
  gatewayTxnId?: string;
}

export interface PaymentFailedEvent {
  eventType: 'payment.failed';
  paymentId: string;
  paymentNumber: string;
  clientId: string;
  amount: number;
  failureReason?: string;
  failureCode?: string;
}

export interface PaymentRefundedEvent {
  eventType: 'payment.refunded';
  paymentId: string;
  paymentNumber: string;
  clientId: string;
  refundAmount: number;
  reason: string;
}

export interface CouponAppliedEvent {
  eventType: 'coupon.applied';
  couponId: string;
  couponCode: string;
  clientId: string;
  orderId?: string;
  invoiceId?: string;
  discountAmount: number;
}

export interface CouponExpiredEvent {
  eventType: 'coupon.expired';
  couponId: string;
  couponCode: string;
  totalUsages: number;
}

export type BillingEventType =
  | InvoiceCreatedEvent
  | InvoiceSentEvent
  | InvoicePaidEvent
  | InvoiceOverdueEvent
  | PaymentInitiatedEvent
  | PaymentCompletedEvent
  | PaymentFailedEvent
  | PaymentRefundedEvent
  | CouponAppliedEvent
  | CouponExpiredEvent;
