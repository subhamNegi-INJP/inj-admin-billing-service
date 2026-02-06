
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.InvoiceScalarFieldEnum = {
  id: 'id',
  invoiceNumber: 'invoiceNumber',
  clientId: 'clientId',
  clientName: 'clientName',
  clientEmail: 'clientEmail',
  clientPhone: 'clientPhone',
  clientCompany: 'clientCompany',
  billingAddress: 'billingAddress',
  billingCity: 'billingCity',
  billingState: 'billingState',
  billingCountry: 'billingCountry',
  billingZipCode: 'billingZipCode',
  gstin: 'gstin',
  orderId: 'orderId',
  orderNumber: 'orderNumber',
  subscriptionId: 'subscriptionId',
  invoiceDate: 'invoiceDate',
  dueDate: 'dueDate',
  periodStart: 'periodStart',
  periodEnd: 'periodEnd',
  status: 'status',
  subtotal: 'subtotal',
  discountPercent: 'discountPercent',
  discountAmount: 'discountAmount',
  couponId: 'couponId',
  couponCode: 'couponCode',
  couponDiscount: 'couponDiscount',
  taxPercent: 'taxPercent',
  taxAmount: 'taxAmount',
  cgst: 'cgst',
  sgst: 'sgst',
  igst: 'igst',
  totalAmount: 'totalAmount',
  paidAmount: 'paidAmount',
  balanceAmount: 'balanceAmount',
  currency: 'currency',
  notes: 'notes',
  termsAndConditions: 'termsAndConditions',
  internalNotes: 'internalNotes',
  sentAt: 'sentAt',
  sentBy: 'sentBy',
  sentByName: 'sentByName',
  paidAt: 'paidAt',
  cancelledAt: 'cancelledAt',
  cancelReason: 'cancelReason',
  cancelledById: 'cancelledById',
  cancelledByName: 'cancelledByName',
  pdfUrl: 'pdfUrl',
  pdfGeneratedAt: 'pdfGeneratedAt',
  createdById: 'createdById',
  createdByName: 'createdByName',
  updatedById: 'updatedById',
  updatedByName: 'updatedByName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InvoiceItemScalarFieldEnum = {
  id: 'id',
  invoiceId: 'invoiceId',
  productId: 'productId',
  productName: 'productName',
  productCode: 'productCode',
  licenseTypeId: 'licenseTypeId',
  licenseTypeName: 'licenseTypeName',
  description: 'description',
  quantity: 'quantity',
  unitPrice: 'unitPrice',
  discountPercent: 'discountPercent',
  discountAmount: 'discountAmount',
  taxPercent: 'taxPercent',
  taxAmount: 'taxAmount',
  subtotal: 'subtotal',
  total: 'total',
  periodStart: 'periodStart',
  periodEnd: 'periodEnd',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  paymentNumber: 'paymentNumber',
  clientId: 'clientId',
  clientName: 'clientName',
  clientEmail: 'clientEmail',
  invoiceId: 'invoiceId',
  orderId: 'orderId',
  subscriptionId: 'subscriptionId',
  amount: 'amount',
  currency: 'currency',
  method: 'method',
  status: 'status',
  gatewayName: 'gatewayName',
  gatewayTxnId: 'gatewayTxnId',
  gatewayOrderId: 'gatewayOrderId',
  gatewayPaymentId: 'gatewayPaymentId',
  gatewayResponse: 'gatewayResponse',
  bankName: 'bankName',
  bankAccount: 'bankAccount',
  bankReference: 'bankReference',
  chequeNumber: 'chequeNumber',
  chequeDate: 'chequeDate',
  chequeBank: 'chequeBank',
  refundedAmount: 'refundedAmount',
  refundReason: 'refundReason',
  refundedAt: 'refundedAt',
  refundedById: 'refundedById',
  refundedByName: 'refundedByName',
  processedAt: 'processedAt',
  processedById: 'processedById',
  processedByName: 'processedByName',
  failureReason: 'failureReason',
  failureCode: 'failureCode',
  notes: 'notes',
  internalNotes: 'internalNotes',
  createdById: 'createdById',
  createdByName: 'createdByName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CouponScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  description: 'description',
  type: 'type',
  value: 'value',
  maxDiscount: 'maxDiscount',
  minOrderAmount: 'minOrderAmount',
  status: 'status',
  startDate: 'startDate',
  endDate: 'endDate',
  maxUses: 'maxUses',
  maxUsesPerClient: 'maxUsesPerClient',
  currentUses: 'currentUses',
  applicableProducts: 'applicableProducts',
  applicableLicenseTypes: 'applicableLicenseTypes',
  applicableClients: 'applicableClients',
  isFirstPurchaseOnly: 'isFirstPurchaseOnly',
  isRenewalApplicable: 'isRenewalApplicable',
  isStackable: 'isStackable',
  createdById: 'createdById',
  createdByName: 'createdByName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CouponUsageScalarFieldEnum = {
  id: 'id',
  couponId: 'couponId',
  clientId: 'clientId',
  clientName: 'clientName',
  orderId: 'orderId',
  invoiceId: 'invoiceId',
  subscriptionId: 'subscriptionId',
  discountAmount: 'discountAmount',
  usedAt: 'usedAt'
};

exports.Prisma.TaxConfigScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  rate: 'rate',
  cgstRate: 'cgstRate',
  sgstRate: 'sgstRate',
  igstRate: 'igstRate',
  country: 'country',
  states: 'states',
  isDefault: 'isDefault',
  isActive: 'isActive',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentGatewayConfigScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  apiKey: 'apiKey',
  apiSecret: 'apiSecret',
  webhookSecret: 'webhookSecret',
  merchantId: 'merchantId',
  isActive: 'isActive',
  isDefault: 'isDefault',
  testMode: 'testMode',
  supportedMethods: 'supportedMethods',
  transactionFeePercent: 'transactionFeePercent',
  transactionFeeFixed: 'transactionFeeFixed',
  callbackUrl: 'callbackUrl',
  webhookUrl: 'webhookUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.InvoiceStatus = exports.$Enums.InvoiceStatus = {
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  SENT: 'SENT',
  PARTIALLY_PAID: 'PARTIALLY_PAID',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED',
  VOID: 'VOID'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  CREDIT_CARD: 'CREDIT_CARD',
  DEBIT_CARD: 'DEBIT_CARD',
  BANK_TRANSFER: 'BANK_TRANSFER',
  UPI: 'UPI',
  NET_BANKING: 'NET_BANKING',
  WALLET: 'WALLET',
  CHEQUE: 'CHEQUE',
  CASH: 'CASH',
  RAZORPAY: 'RAZORPAY',
  STRIPE: 'STRIPE',
  PAYPAL: 'PAYPAL',
  OTHER: 'OTHER'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  PARTIALLY_REFUNDED: 'PARTIALLY_REFUNDED',
  CANCELLED: 'CANCELLED',
  DISPUTED: 'DISPUTED'
};

exports.CouponType = exports.$Enums.CouponType = {
  PERCENTAGE: 'PERCENTAGE',
  FIXED_AMOUNT: 'FIXED_AMOUNT',
  FREE_TRIAL: 'FREE_TRIAL',
  FIRST_MONTH_FREE: 'FIRST_MONTH_FREE'
};

exports.CouponStatus = exports.$Enums.CouponStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  EXPIRED: 'EXPIRED',
  EXHAUSTED: 'EXHAUSTED'
};

exports.Prisma.ModelName = {
  Invoice: 'Invoice',
  InvoiceItem: 'InvoiceItem',
  Payment: 'Payment',
  Coupon: 'Coupon',
  CouponUsage: 'CouponUsage',
  TaxConfig: 'TaxConfig',
  PaymentGatewayConfig: 'PaymentGatewayConfig'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
