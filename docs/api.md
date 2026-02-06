# Billing Service API

Complete API reference for the Billing Service.

## Base URL

```
http://localhost:3007/api
```

## Authentication

All endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

## Response Format

All responses follow this structure:

```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

Error responses:

```json
{
  "success": false,
  "error": "Error message",
  "details": [ ... ]
}
```

---

## Invoices

### List All Invoices

```http
GET /invoices
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| page | number | Page number (default: 1) |
| limit | number | Items per page (default: 20) |
| status | string | Filter by status (DRAFT, PENDING, SENT, PAID, OVERDUE, etc.) |
| clientId | string | Filter by client |
| startDate | string | Filter by issue date (from) |
| endDate | string | Filter by issue date (to) |

**Response:**

```json
{
  "success": true,
  "data": {
    "invoices": [
      {
        "id": "inv-001",
        "invoiceNumber": "INV-2026-00001",
        "clientId": "client-001",
        "clientName": "Acme Corporation",
        "clientEmail": "billing@acme.com",
        "status": "PAID",
        "subtotal": 50000,
        "discountAmount": 5000,
        "taxAmount": 8100,
        "totalAmount": 53100,
        "paidAmount": 53100,
        "balanceAmount": 0,
        "dueDate": "2026-02-28T00:00:00Z",
        "createdAt": "2026-02-01T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 150,
      "totalPages": 8
    }
  }
}
```

---

### Get Invoice by ID

```http
GET /invoices/:id
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "inv-001",
    "invoiceNumber": "INV-2026-00001",
    "clientId": "client-001",
    "clientName": "Acme Corporation",
    "clientEmail": "billing@acme.com",
    "clientCompany": "Acme Corporation Pvt Ltd",
    "billingAddress": "123 Business Park",
    "billingCity": "Mumbai",
    "billingState": "Maharashtra",
    "billingCountry": "India",
    "billingZipCode": "400001",
    "gstin": "27AABCA1234B1ZX",
    "status": "PAID",
    "subtotal": 50000,
    "discountAmount": 5000,
    "taxPercent": 18,
    "taxAmount": 8100,
    "cgst": 4050,
    "sgst": 4050,
    "totalAmount": 53100,
    "paidAmount": 53100,
    "balanceAmount": 0,
    "currency": "INR",
    "dueDate": "2026-02-28T00:00:00Z",
    "sentAt": "2026-02-01T00:00:00Z",
    "paidAt": "2026-02-05T00:00:00Z",
    "items": [
      {
        "id": "inv-item-001",
        "productId": "product-001",
        "productName": "Enterprise Suite",
        "productCode": "ENT-SUITE",
        "description": "Annual subscription - 100 seats",
        "quantity": 100,
        "unitPrice": 500,
        "discountPercent": 10,
        "discountAmount": 5000,
        "taxPercent": 18,
        "taxAmount": 8100,
        "subtotal": 50000,
        "total": 53100
      }
    ],
    "payments": [
      {
        "id": "pay-001",
        "paymentNumber": "PAY-2026-00001",
        "amount": 53100,
        "method": "RAZORPAY",
        "status": "COMPLETED",
        "processedAt": "2026-02-05T00:00:00Z"
      }
    ]
  }
}
```

---

### Create Invoice

```http
POST /invoices
```

**Request Body:**

```json
{
  "clientId": "client-001",
  "clientName": "Acme Corporation",
  "clientEmail": "billing@acme.com",
  "clientCompany": "Acme Corporation Pvt Ltd",
  "billingAddress": "123 Business Park",
  "billingCity": "Mumbai",
  "billingState": "Maharashtra",
  "billingCountry": "India",
  "billingZipCode": "400001",
  "gstin": "27AABCA1234B1ZX",
  "dueDate": "2026-02-28",
  "taxPercent": 18,
  "currency": "INR",
  "notes": "Payment due within 30 days",
  "items": [
    {
      "productId": "product-001",
      "productName": "Enterprise Suite",
      "productCode": "ENT-SUITE",
      "description": "Annual subscription - 100 seats",
      "quantity": 100,
      "unitPrice": 500,
      "discountPercent": 10,
      "taxPercent": 18
    }
  ]
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "inv-001",
    "invoiceNumber": "INV-2026-00001",
    "status": "DRAFT",
    ...
  },
  "message": "Invoice created successfully"
}
```

---

### Update Invoice

```http
PUT /invoices/:id
```

**Request Body:**

```json
{
  "dueDate": "2026-03-15",
  "notes": "Updated payment terms"
}
```

**Note:** Only DRAFT invoices can be updated. Sent or paid invoices cannot be modified.

---

### Delete Invoice

```http
DELETE /invoices/:id
```

**Note:** Only DRAFT invoices can be deleted.

---

### Send Invoice

```http
POST /invoices/:id/send
```

**Request Body:**

```json
{
  "recipientEmail": "billing@acme.com",
  "ccEmails": ["accounts@acme.com"],
  "message": "Please find attached your invoice."
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "inv-001",
    "status": "SENT",
    "sentAt": "2026-02-01T10:00:00Z"
  },
  "message": "Invoice sent successfully"
}
```

---

### Mark Invoice as Paid

```http
POST /invoices/:id/mark-paid
```

**Request Body:**

```json
{
  "paymentId": "pay-001",
  "paidAmount": 53100,
  "paidAt": "2026-02-05T00:00:00Z",
  "notes": "Payment received via bank transfer"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "inv-001",
    "status": "PAID",
    "paidAmount": 53100,
    "balanceAmount": 0,
    "paidAt": "2026-02-05T00:00:00Z"
  },
  "message": "Invoice marked as paid"
}
```

---

### Get Invoice Statistics

```http
GET /invoices/stats
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| startDate | string | Filter by date range (from) |
| endDate | string | Filter by date range (to) |
| clientId | string | Filter by client |

**Response:**

```json
{
  "success": true,
  "data": {
    "total": 500,
    "draft": 50,
    "pending": 30,
    "sent": 100,
    "paid": 280,
    "overdue": 25,
    "cancelled": 15,
    "totalRevenue": 5000000,
    "outstandingAmount": 750000,
    "averageInvoiceAmount": 10000
  }
}
```

---

## Payments

### List All Payments

```http
GET /payments
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| page | number | Page number (default: 1) |
| limit | number | Items per page (default: 20) |
| status | string | Filter by status |
| method | string | Filter by payment method |
| clientId | string | Filter by client |
| invoiceId | string | Filter by invoice |

**Response:**

```json
{
  "success": true,
  "data": {
    "payments": [
      {
        "id": "pay-001",
        "paymentNumber": "PAY-2026-00001",
        "clientId": "client-001",
        "clientName": "Acme Corporation",
        "invoiceId": "inv-001",
        "amount": 53100,
        "currency": "INR",
        "method": "RAZORPAY",
        "status": "COMPLETED",
        "processedAt": "2026-02-05T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 300,
      "totalPages": 15
    }
  }
}
```

---

### Get Payment by ID

```http
GET /payments/:id
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "pay-001",
    "paymentNumber": "PAY-2026-00001",
    "clientId": "client-001",
    "clientName": "Acme Corporation",
    "clientEmail": "billing@acme.com",
    "invoiceId": "inv-001",
    "amount": 53100,
    "currency": "INR",
    "method": "RAZORPAY",
    "status": "COMPLETED",
    "gatewayName": "razorpay",
    "gatewayTxnId": "pay_ABC123XYZ",
    "gatewayPaymentId": "pay_ABC123XYZ",
    "processedAt": "2026-02-05T00:00:00Z",
    "invoice": {
      "id": "inv-001",
      "invoiceNumber": "INV-2026-00001",
      "totalAmount": 53100
    }
  }
}
```

---

### Create Payment

```http
POST /payments
```

**Request Body:**

```json
{
  "invoiceId": "inv-001",
  "clientId": "client-001",
  "clientName": "Acme Corporation",
  "clientEmail": "billing@acme.com",
  "amount": 53100,
  "currency": "INR",
  "method": "RAZORPAY",
  "gatewayName": "razorpay",
  "notes": "Payment for invoice INV-2026-00001"
}
```

**Supported Payment Methods:**

- `CREDIT_CARD`
- `DEBIT_CARD`
- `BANK_TRANSFER`
- `UPI`
- `NET_BANKING`
- `WALLET`
- `CHEQUE`
- `CASH`
- `RAZORPAY`
- `STRIPE`
- `PAYPAL`
- `OTHER`

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "pay-001",
    "paymentNumber": "PAY-2026-00001",
    "status": "PENDING",
    ...
  },
  "message": "Payment created successfully"
}
```

---

### Process Payment

```http
POST /payments/:id/process
```

**Request Body:**

```json
{
  "gatewayTxnId": "pay_ABC123XYZ",
  "gatewayPaymentId": "pay_ABC123XYZ",
  "gatewayResponse": {
    "order_id": "order_ABC123",
    "payment_id": "pay_ABC123XYZ",
    "signature": "xyz123"
  }
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "pay-001",
    "status": "COMPLETED",
    "processedAt": "2026-02-05T10:00:00Z"
  },
  "message": "Payment processed successfully"
}
```

---

### Fail Payment

```http
POST /payments/:id/fail
```

**Request Body:**

```json
{
  "failureReason": "Card declined by issuing bank",
  "failureCode": "BAD_REQUEST_ERROR"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "pay-001",
    "status": "FAILED",
    "failureReason": "Card declined by issuing bank"
  },
  "message": "Payment marked as failed"
}
```

---

### Refund Payment

```http
POST /payments/:id/refund
```

**Request Body:**

```json
{
  "refundAmount": 53100,
  "reason": "Customer requested cancellation",
  "notes": "Full refund processed"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "pay-001",
    "status": "REFUNDED",
    "refundAmount": 53100,
    "refundedAt": "2026-02-10T10:00:00Z"
  },
  "message": "Payment refunded successfully"
}
```

---

### Get Payment Statistics

```http
GET /payments/stats
```

**Response:**

```json
{
  "success": true,
  "data": {
    "total": 500,
    "pending": 20,
    "processing": 5,
    "completed": 420,
    "failed": 30,
    "refunded": 25,
    "totalAmount": 5000000,
    "completedAmount": 4200000,
    "refundedAmount": 250000,
    "byMethod": {
      "RAZORPAY": 300,
      "UPI": 100,
      "BANK_TRANSFER": 50,
      "CREDIT_CARD": 50
    }
  }
}
```

---

## Coupons

### List All Coupons

```http
GET /coupons
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| page | number | Page number (default: 1) |
| limit | number | Items per page (default: 20) |
| status | string | Filter by status (ACTIVE, INACTIVE, EXPIRED, DEPLETED) |
| type | string | Filter by type |

**Response:**

```json
{
  "success": true,
  "data": {
    "coupons": [
      {
        "id": "coupon-001",
        "code": "WELCOME20",
        "name": "Welcome Discount",
        "type": "PERCENTAGE",
        "value": 20,
        "maxDiscount": 5000,
        "status": "ACTIVE",
        "currentUses": 150,
        "maxUses": 1000
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 50,
      "totalPages": 3
    }
  }
}
```

---

### Get Coupon by ID

```http
GET /coupons/:id
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "coupon-001",
    "code": "WELCOME20",
    "name": "Welcome Discount",
    "description": "20% off on first purchase",
    "type": "PERCENTAGE",
    "value": 20,
    "maxDiscount": 5000,
    "minOrderAmount": 1000,
    "status": "ACTIVE",
    "maxUses": 1000,
    "maxUsesPerClient": 1,
    "currentUses": 150,
    "isFirstPurchaseOnly": true,
    "isRenewalApplicable": false,
    "isStackable": false,
    "applicableProducts": [],
    "applicableLicenseTypes": [],
    "applicableClients": [],
    "startDate": null,
    "endDate": null,
    "createdAt": "2026-01-01T00:00:00Z"
  }
}
```

---

### Create Coupon

```http
POST /coupons
```

**Request Body:**

```json
{
  "code": "SUMMER25",
  "name": "Summer Sale",
  "description": "25% off during summer sale",
  "type": "PERCENTAGE",
  "value": 25,
  "maxDiscount": 10000,
  "minOrderAmount": 5000,
  "maxUses": 500,
  "maxUsesPerClient": 1,
  "isFirstPurchaseOnly": false,
  "isRenewalApplicable": true,
  "startDate": "2026-06-01",
  "endDate": "2026-08-31"
}
```

**Supported Coupon Types:**

- `PERCENTAGE`: Percentage discount
- `FIXED_AMOUNT`: Fixed amount off
- `FREE_TRIAL`: Free trial period
- `FIRST_MONTH_FREE`: First month free

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "coupon-002",
    "code": "SUMMER25",
    "status": "ACTIVE",
    ...
  },
  "message": "Coupon created successfully"
}
```

---

### Update Coupon

```http
PUT /coupons/:id
```

**Request Body:**

```json
{
  "maxUses": 1000,
  "endDate": "2026-09-30"
}
```

---

### Delete Coupon

```http
DELETE /coupons/:id
```

---

### Validate Coupon

```http
POST /coupons/validate
```

**Request Body:**

```json
{
  "code": "WELCOME20",
  "clientId": "client-001",
  "orderAmount": 25000,
  "productId": "product-001",
  "licenseTypeId": "license-type-001",
  "isFirstPurchase": true
}
```

**Response (Valid):**

```json
{
  "success": true,
  "data": {
    "valid": true,
    "coupon": {
      "id": "coupon-001",
      "code": "WELCOME20",
      "name": "Welcome Discount",
      "type": "PERCENTAGE",
      "value": 20,
      "maxDiscount": 5000
    },
    "discountAmount": 5000,
    "message": "Coupon is valid"
  }
}
```

**Response (Invalid):**

```json
{
  "success": true,
  "data": {
    "valid": false,
    "reason": "ALREADY_USED",
    "message": "You have already used this coupon"
  }
}
```

**Possible Invalid Reasons:**

- `NOT_FOUND`: Coupon code does not exist
- `INACTIVE`: Coupon is not active
- `EXPIRED`: Coupon has expired
- `DEPLETED`: Coupon usage limit reached
- `NOT_STARTED`: Coupon not yet valid
- `ALREADY_USED`: Client already used this coupon
- `MIN_ORDER_NOT_MET`: Order amount below minimum
- `PRODUCT_NOT_APPLICABLE`: Coupon not valid for this product
- `LICENSE_TYPE_NOT_APPLICABLE`: Coupon not valid for this license type
- `CLIENT_NOT_APPLICABLE`: Coupon not valid for this client
- `FIRST_PURCHASE_ONLY`: Coupon only valid for first purchase
- `NOT_APPLICABLE_FOR_RENEWAL`: Coupon not valid for renewals

---

### Apply Coupon

```http
POST /coupons/apply
```

**Request Body:**

```json
{
  "code": "WELCOME20",
  "clientId": "client-001",
  "clientName": "Acme Corporation",
  "invoiceId": "inv-001",
  "orderId": "order-001",
  "orderAmount": 25000,
  "productId": "product-001",
  "licenseTypeId": "license-type-001",
  "isFirstPurchase": true
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "applied": true,
    "couponId": "coupon-001",
    "code": "WELCOME20",
    "discountAmount": 5000,
    "usageId": "usage-001"
  },
  "message": "Coupon applied successfully"
}
```

---

### Get Coupon Statistics

```http
GET /coupons/stats
```

**Response:**

```json
{
  "success": true,
  "data": {
    "total": 50,
    "active": 30,
    "inactive": 10,
    "expired": 8,
    "depleted": 2,
    "totalUsages": 5000,
    "totalDiscountGiven": 2500000,
    "byType": {
      "PERCENTAGE": 25,
      "FIXED_AMOUNT": 15,
      "FREE_TRIAL": 5,
      "FIRST_MONTH_FREE": 5
    }
  }
}
```

---

## Health Check

```http
GET /health
```

**Response:**

```json
{
  "status": "healthy",
  "service": "billing-service",
  "timestamp": "2026-02-01T10:00:00Z"
}
```

---

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid input data |
| 401 | Unauthorized - Missing or invalid JWT |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource does not exist |
| 409 | Conflict - Resource already exists |
| 422 | Unprocessable Entity - Validation error |
| 500 | Internal Server Error |

---

## Webhooks (Future)

The service will support webhooks for:

- Invoice created/updated/paid
- Payment completed/failed/refunded
- Coupon applied/expired

Webhook configuration will be available via the admin panel.
