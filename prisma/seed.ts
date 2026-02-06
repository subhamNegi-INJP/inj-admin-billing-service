// Billing Service Database Seed
// Creates sample invoices, payments, coupons, and configurations

import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Billing Service database...');

  // =============================================================================
  // TAX CONFIGURATIONS
  // =============================================================================

  const taxConfigs = [
    {
      id: 'tax-gst-18',
      name: 'GST 18%',
      code: 'GST_18',
      rate: 18,
      cgstRate: 9,
      sgstRate: 9,
      igstRate: 0,
      country: 'India',
      isDefault: true,
      isActive: true,
      description: 'Standard GST rate for software services',
    },
    {
      id: 'tax-gst-12',
      name: 'GST 12%',
      code: 'GST_12',
      rate: 12,
      cgstRate: 6,
      sgstRate: 6,
      igstRate: 0,
      country: 'India',
      isDefault: false,
      isActive: true,
      description: 'Reduced GST rate',
    },
    {
      id: 'tax-igst-18',
      name: 'IGST 18%',
      code: 'IGST_18',
      rate: 18,
      cgstRate: 0,
      sgstRate: 0,
      igstRate: 18,
      country: 'India',
      isDefault: false,
      isActive: true,
      description: 'Inter-state GST for different state transactions',
    },
  ];

  for (const tax of taxConfigs) {
    await prisma.taxConfig.upsert({
      where: { id: tax.id },
      update: tax,
      create: tax,
    });
    console.log(`✅ Created tax config: ${tax.name}`);
  }

  // =============================================================================
  // PAYMENT GATEWAY CONFIGS
  // =============================================================================

  const gatewayConfigs = [
    {
      id: 'gateway-razorpay',
      name: 'Razorpay',
      code: 'razorpay',
      isActive: true,
      isDefault: true,
      testMode: true,
      supportedMethods: ['credit_card', 'debit_card', 'upi', 'net_banking', 'wallet'],
      transactionFeePercent: 2,
      transactionFeeFixed: 0,
    },
    {
      id: 'gateway-stripe',
      name: 'Stripe',
      code: 'stripe',
      isActive: false,
      isDefault: false,
      testMode: true,
      supportedMethods: ['credit_card', 'debit_card'],
      transactionFeePercent: 2.9,
      transactionFeeFixed: 30,
    },
  ];

  for (const gateway of gatewayConfigs) {
    await prisma.paymentGatewayConfig.upsert({
      where: { id: gateway.id },
      update: gateway,
      create: gateway,
    });
    console.log(`✅ Created gateway config: ${gateway.name}`);
  }

  // =============================================================================
  // COUPONS
  // =============================================================================

  const coupons = [
    {
      id: 'coupon-001',
      code: 'WELCOME20',
      name: 'Welcome Discount',
      description: '20% off on first purchase',
      type: 'PERCENTAGE' as const,
      value: 20,
      maxDiscount: 5000,
      minOrderAmount: 1000,
      status: 'ACTIVE' as const,
      maxUses: 1000,
      maxUsesPerClient: 1,
      isFirstPurchaseOnly: true,
      isRenewalApplicable: false,
      isStackable: false,
    },
    {
      id: 'coupon-002',
      code: 'FLAT500',
      name: 'Flat ₹500 Off',
      description: 'Flat ₹500 discount on orders above ₹5000',
      type: 'FIXED_AMOUNT' as const,
      value: 500,
      minOrderAmount: 5000,
      status: 'ACTIVE' as const,
      maxUses: 500,
      maxUsesPerClient: 3,
      isFirstPurchaseOnly: false,
      isRenewalApplicable: true,
      isStackable: false,
    },
    {
      id: 'coupon-003',
      code: 'ENTERPRISE30',
      name: 'Enterprise Discount',
      description: '30% off for enterprise clients',
      type: 'PERCENTAGE' as const,
      value: 30,
      maxDiscount: 50000,
      minOrderAmount: 50000,
      status: 'ACTIVE' as const,
      applicableClients: ['client-005'],
      isFirstPurchaseOnly: false,
      isRenewalApplicable: true,
      isStackable: false,
    },
    {
      id: 'coupon-004',
      code: 'EXPIRED2024',
      name: 'Expired Promo',
      description: 'This coupon has expired',
      type: 'PERCENTAGE' as const,
      value: 10,
      status: 'EXPIRED' as const,
      endDate: new Date('2024-12-31'),
      isFirstPurchaseOnly: false,
      isRenewalApplicable: false,
      isStackable: false,
    },
  ];

  for (const coupon of coupons) {
    await prisma.coupon.upsert({
      where: { id: coupon.id },
      update: coupon,
      create: coupon,
    });
    console.log(`✅ Created coupon: ${coupon.code}`);
  }

  // =============================================================================
  // INVOICES
  // =============================================================================

  const invoices = [
    {
      id: 'inv-001',
      invoiceNumber: 'INV-2026-00001',
      clientId: 'client-001',
      clientName: 'Acme Corporation',
      clientEmail: 'billing@acme.com',
      clientCompany: 'Acme Corporation Pvt Ltd',
      billingAddress: '123 Business Park',
      billingCity: 'Mumbai',
      billingState: 'Maharashtra',
      billingCountry: 'India',
      billingZipCode: '400001',
      gstin: '27AABCA1234B1ZX',
      orderId: 'order-001',
      subscriptionId: 'sub-001',
      dueDate: new Date('2026-02-28'),
      status: 'PAID' as const,
      subtotal: 50000,
      discountAmount: 5000,
      taxPercent: 18,
      taxAmount: 8100,
      cgst: 4050,
      sgst: 4050,
      totalAmount: 53100,
      paidAmount: 53100,
      balanceAmount: 0,
      currency: 'INR',
      sentAt: new Date('2026-02-01'),
      paidAt: new Date('2026-02-05'),
    },
    {
      id: 'inv-002',
      invoiceNumber: 'INV-2026-00002',
      clientId: 'client-002',
      clientName: 'TechStart Inc',
      clientEmail: 'accounts@techstart.io',
      clientCompany: 'TechStart Inc',
      billingCity: 'Bangalore',
      billingState: 'Karnataka',
      billingCountry: 'India',
      orderId: 'order-002',
      dueDate: new Date('2026-03-15'),
      status: 'SENT' as const,
      subtotal: 25000,
      discountAmount: 0,
      taxPercent: 18,
      taxAmount: 4500,
      cgst: 2250,
      sgst: 2250,
      totalAmount: 29500,
      paidAmount: 0,
      balanceAmount: 29500,
      currency: 'INR',
      sentAt: new Date('2026-02-01'),
    },
    {
      id: 'inv-003',
      invoiceNumber: 'INV-2026-00003',
      clientId: 'client-003',
      clientName: 'GlobalTrade LLC',
      clientEmail: 'finance@globaltrade.com',
      clientCompany: 'GlobalTrade LLC',
      billingCity: 'Delhi',
      billingState: 'Delhi',
      billingCountry: 'India',
      dueDate: new Date('2026-01-15'),
      status: 'OVERDUE' as const,
      subtotal: 15000,
      discountAmount: 1500,
      couponCode: 'FLAT500',
      couponDiscount: 500,
      taxPercent: 18,
      taxAmount: 2340,
      totalAmount: 15340,
      paidAmount: 0,
      balanceAmount: 15340,
      currency: 'INR',
      sentAt: new Date('2026-01-02'),
    },
    {
      id: 'inv-004',
      invoiceNumber: 'INV-2026-00004',
      clientId: 'client-001',
      clientName: 'Acme Corporation',
      clientEmail: 'billing@acme.com',
      orderId: 'order-003',
      dueDate: new Date('2026-03-01'),
      status: 'DRAFT' as const,
      subtotal: 100000,
      discountAmount: 10000,
      taxPercent: 18,
      taxAmount: 16200,
      totalAmount: 106200,
      paidAmount: 0,
      balanceAmount: 106200,
      currency: 'INR',
    },
  ];

  for (const invoice of invoices) {
    await prisma.invoice.upsert({
      where: { id: invoice.id },
      update: invoice,
      create: invoice,
    });
    console.log(`✅ Created invoice: ${invoice.invoiceNumber}`);
  }

  // =============================================================================
  // INVOICE ITEMS
  // =============================================================================

  const invoiceItems = [
    {
      id: 'inv-item-001',
      invoiceId: 'inv-001',
      productId: 'product-001',
      productName: 'Enterprise Suite',
      productCode: 'ENT-SUITE',
      licenseTypeId: 'license-type-001',
      licenseTypeName: 'Enterprise License',
      description: 'Annual subscription - 100 seats',
      quantity: 100,
      unitPrice: 500,
      discountPercent: 10,
      discountAmount: 5000,
      taxPercent: 18,
      taxAmount: 8100,
      subtotal: 50000,
      total: 53100,
      periodStart: new Date('2026-01-01'),
      periodEnd: new Date('2027-01-01'),
    },
    {
      id: 'inv-item-002',
      invoiceId: 'inv-002',
      productId: 'product-001',
      productName: 'Enterprise Suite',
      productCode: 'ENT-SUITE',
      licenseTypeId: 'license-type-002',
      licenseTypeName: 'Professional License',
      description: 'Annual subscription - 25 seats',
      quantity: 25,
      unitPrice: 1000,
      discountPercent: 0,
      discountAmount: 0,
      taxPercent: 18,
      taxAmount: 4500,
      subtotal: 25000,
      total: 29500,
    },
    {
      id: 'inv-item-003',
      invoiceId: 'inv-003',
      productId: 'product-002',
      productName: 'Analytics Platform',
      productCode: 'ANL-PLAT',
      description: 'Monthly subscription - 50 seats',
      quantity: 50,
      unitPrice: 300,
      discountPercent: 10,
      discountAmount: 1500,
      taxPercent: 18,
      taxAmount: 2340,
      subtotal: 15000,
      total: 15840,
    },
  ];

  for (const item of invoiceItems) {
    await prisma.invoiceItem.upsert({
      where: { id: item.id },
      update: item,
      create: item,
    });
    console.log(`✅ Created invoice item: ${item.productName} for invoice ${item.invoiceId}`);
  }

  // =============================================================================
  // PAYMENTS
  // =============================================================================

  const payments = [
    {
      id: 'pay-001',
      paymentNumber: 'PAY-2026-00001',
      clientId: 'client-001',
      clientName: 'Acme Corporation',
      clientEmail: 'billing@acme.com',
      invoiceId: 'inv-001',
      orderId: 'order-001',
      amount: 53100,
      currency: 'INR',
      method: 'RAZORPAY' as const,
      status: 'COMPLETED' as const,
      gatewayName: 'razorpay',
      gatewayTxnId: 'pay_ABC123XYZ',
      gatewayPaymentId: 'pay_ABC123XYZ',
      processedAt: new Date('2026-02-05'),
    },
    {
      id: 'pay-002',
      paymentNumber: 'PAY-2026-00002',
      clientId: 'client-004',
      clientName: 'StartupXYZ',
      clientEmail: 'admin@startupxyz.co',
      invoiceId: null,
      amount: 5000,
      currency: 'INR',
      method: 'UPI' as const,
      status: 'COMPLETED' as const,
      gatewayName: 'razorpay',
      gatewayTxnId: 'pay_DEF456UVW',
      processedAt: new Date('2026-01-20'),
    },
    {
      id: 'pay-003',
      paymentNumber: 'PAY-2026-00003',
      clientId: 'client-002',
      clientName: 'TechStart Inc',
      clientEmail: 'accounts@techstart.io',
      invoiceId: 'inv-002',
      amount: 29500,
      currency: 'INR',
      method: 'BANK_TRANSFER' as const,
      status: 'PENDING' as const,
      bankName: 'HDFC Bank',
      notes: 'Awaiting bank transfer confirmation',
    },
    {
      id: 'pay-004',
      paymentNumber: 'PAY-2026-00004',
      clientId: 'client-003',
      clientName: 'GlobalTrade LLC',
      clientEmail: 'finance@globaltrade.com',
      amount: 15340,
      currency: 'INR',
      method: 'CREDIT_CARD' as const,
      status: 'FAILED' as const,
      gatewayName: 'razorpay',
      failureReason: 'Card declined by issuing bank',
      failureCode: 'BAD_REQUEST_ERROR',
    },
    {
      id: 'pay-005',
      paymentNumber: 'PAY-2026-00005',
      clientId: 'client-005',
      clientName: 'MegaCorp Industries',
      clientEmail: 'procurement@megacorp.com',
      amount: 200000,
      currency: 'INR',
      method: 'CHEQUE' as const,
      status: 'COMPLETED' as const,
      chequeNumber: '123456',
      chequeDate: new Date('2026-01-15'),
      chequeBank: 'State Bank of India',
      processedAt: new Date('2026-01-25'),
    },
  ];

  for (const payment of payments) {
    await prisma.payment.upsert({
      where: { id: payment.id },
      update: payment,
      create: payment,
    });
    console.log(`✅ Created payment: ${payment.paymentNumber}`);
  }

  // =============================================================================
  // COUPON USAGES
  // =============================================================================

  const couponUsages = [
    {
      id: 'usage-001',
      couponId: 'coupon-002',
      clientId: 'client-003',
      clientName: 'GlobalTrade LLC',
      invoiceId: 'inv-003',
      discountAmount: 500,
      usedAt: new Date('2026-01-02'),
    },
  ];

  for (const usage of couponUsages) {
    await prisma.couponUsage.upsert({
      where: { id: usage.id },
      update: usage,
      create: usage,
    });
    console.log(`✅ Created coupon usage: ${usage.couponId} by ${usage.clientName}`);
  }

  // Update coupon usage count
  await prisma.coupon.update({
    where: { id: 'coupon-002' },
    data: { currentUses: 1 },
  });

  console.log('\n🌱 Seed completed successfully!');
  console.log(`   - ${taxConfigs.length} tax configurations`);
  console.log(`   - ${gatewayConfigs.length} payment gateway configs`);
  console.log(`   - ${coupons.length} coupons`);
  console.log(`   - ${invoices.length} invoices`);
  console.log(`   - ${invoiceItems.length} invoice items`);
  console.log(`   - ${payments.length} payments`);
  console.log(`   - ${couponUsages.length} coupon usages`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
