# Billing Service

A microservice for managing invoices, payments, coupons, and tax configurations for the SuperAdmin platform.

## Overview

The Billing Service handles all financial operations:

- **Invoices**: Create, send, track, and manage invoices
- **Payments**: Process, track, and refund payments
- **Coupons**: Create, validate, and apply discount coupons
- **Tax Configurations**: Manage GST/tax rates
- **Payment Gateways**: Configure Razorpay, Stripe, and other gateways

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Billing Service                         │
│                         Port 3007                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   Invoice   │  │   Payment   │  │       Coupon        │  │
│  │  Controller │  │  Controller │  │     Controller      │  │
│  └──────┬──────┘  └──────┬──────┘  └──────────┬──────────┘  │
│         │                │                     │             │
│         └────────────────┼─────────────────────┘             │
│                          │                                   │
│                    ┌─────▼─────┐                            │
│                    │   Prisma  │                            │
│                    │    ORM    │                            │
│                    └─────┬─────┘                            │
│                          │                                   │
│                    ┌─────▼─────┐                            │
│                    │PostgreSQL │                            │
│                    │billing_db │                            │
│                    └───────────┘                            │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack

| Component | Technology |
|-----------|------------|
| Runtime | Node.js 20+ |
| Framework | Express.js |
| Language | TypeScript |
| Database | PostgreSQL |
| ORM | Prisma |
| Message Queue | RabbitMQ |
| Port | 3007 |

## Data Models

### Invoice

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier |
| invoiceNumber | string | Human-readable invoice number (INV-YYYY-NNNNN) |
| clientId | string | Client ID (denormalized) |
| clientName | string | Client name (denormalized) |
| clientEmail | string | Client email (denormalized) |
| status | InvoiceStatus | DRAFT, PENDING, SENT, PARTIALLY_PAID, PAID, OVERDUE, CANCELLED, REFUNDED, VOID |
| subtotal | number | Amount before discounts and tax |
| discountAmount | number | Total discount applied |
| taxPercent | number | Tax percentage |
| taxAmount | number | Total tax amount |
| cgst | number | Central GST amount |
| sgst | number | State GST amount |
| igst | number | Integrated GST amount |
| totalAmount | number | Final invoice amount |
| paidAmount | number | Amount paid so far |
| balanceAmount | number | Remaining balance |
| dueDate | Date | Payment due date |

### InvoiceItem

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier |
| invoiceId | string | Parent invoice ID |
| productId | string | Product ID (denormalized) |
| productName | string | Product name (denormalized) |
| quantity | number | Number of units/seats |
| unitPrice | number | Price per unit |
| discountPercent | number | Item-level discount |
| taxPercent | number | Item-level tax |
| total | number | Item total after discounts and tax |

### Payment

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier |
| paymentNumber | string | Human-readable payment number (PAY-YYYY-NNNNN) |
| invoiceId | string | Linked invoice (optional) |
| clientId | string | Client ID (denormalized) |
| amount | number | Payment amount |
| currency | string | Currency code (INR, USD) |
| method | PaymentMethod | CREDIT_CARD, DEBIT_CARD, UPI, NET_BANKING, RAZORPAY, STRIPE, etc. |
| status | PaymentStatus | PENDING, PROCESSING, COMPLETED, FAILED, REFUNDED, PARTIALLY_REFUNDED |
| gatewayTxnId | string | Payment gateway transaction ID |

### Coupon

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier |
| code | string | Coupon code (unique) |
| name | string | Display name |
| type | CouponType | PERCENTAGE, FIXED_AMOUNT, FREE_TRIAL, FIRST_MONTH_FREE |
| value | number | Discount value (percent or amount) |
| maxDiscount | number | Maximum discount cap for percentage coupons |
| minOrderAmount | number | Minimum order amount required |
| maxUses | number | Total usage limit |
| maxUsesPerClient | number | Per-client usage limit |
| status | CouponStatus | ACTIVE, INACTIVE, EXPIRED, DEPLETED |

## API Endpoints

### Invoices

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/invoices | List all invoices |
| GET | /api/invoices/:id | Get invoice by ID |
| POST | /api/invoices | Create new invoice |
| PUT | /api/invoices/:id | Update invoice |
| DELETE | /api/invoices/:id | Delete invoice |
| POST | /api/invoices/:id/send | Send invoice to client |
| POST | /api/invoices/:id/mark-paid | Mark invoice as paid |
| GET | /api/invoices/stats | Get invoice statistics |

### Payments

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/payments | List all payments |
| GET | /api/payments/:id | Get payment by ID |
| POST | /api/payments | Create new payment |
| POST | /api/payments/:id/process | Process pending payment |
| POST | /api/payments/:id/fail | Mark payment as failed |
| POST | /api/payments/:id/refund | Refund payment |
| GET | /api/payments/stats | Get payment statistics |

### Coupons

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/coupons | List all coupons |
| GET | /api/coupons/:id | Get coupon by ID |
| POST | /api/coupons | Create new coupon |
| PUT | /api/coupons/:id | Update coupon |
| DELETE | /api/coupons/:id | Delete coupon |
| POST | /api/coupons/validate | Validate a coupon |
| POST | /api/coupons/apply | Apply coupon to order |
| GET | /api/coupons/stats | Get coupon statistics |

## Events

The Billing Service publishes events to RabbitMQ for inter-service communication:

| Event | Description |
|-------|-------------|
| invoice.created | New invoice created |
| invoice.sent | Invoice sent to client |
| invoice.paid | Invoice fully paid |
| invoice.overdue | Invoice past due date |
| payment.initiated | Payment process started |
| payment.completed | Payment successful |
| payment.failed | Payment failed |
| payment.refunded | Payment refunded |
| coupon.applied | Coupon applied to order |
| coupon.expired | Coupon expired |

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL 14+
- RabbitMQ (optional, for events)

### Installation

```bash
cd billing-service
npm install
```

### Environment Variables

Create a `.env` file:

```env
PORT=3007
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/billing_db
JWT_SECRET=your-jwt-secret
RABBITMQ_URL=amqp://localhost:5672
```

### Database Setup

```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Seed the database
npm run prisma:seed
```

### Running the Service

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

### Docker

```bash
# Development
docker compose -f docker-compose.dev.yml up

# Production
docker compose up
```

## Integration with Other Services

### Identity Service (Port 3001)

- JWT tokens are validated using the shared secret
- User permissions are checked for billing operations

### Subscription Service (Port 3005)

- Invoices are created for subscription purchases
- Subscription status updated after payment

### License Service (Port 3003)

- Licenses are activated after invoice payment
- Invoice items reference license types

## Tax Configuration

The service supports Indian GST with:

- **CGST**: Central GST (intra-state)
- **SGST**: State GST (intra-state)
- **IGST**: Integrated GST (inter-state)

Tax configurations are stored in the `TaxConfig` model and can be managed via the database.

## Payment Gateway Integration

The service is designed to integrate with:

- **Razorpay**: Indian payment gateway
- **Stripe**: International payments
- **PayPal**: Alternative payment method

Gateway configurations are stored in `PaymentGatewayConfig` model.

## License

Private - SuperAdmin Platform
