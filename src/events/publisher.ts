// Billing Service Events
// Publishes billing-related events to RabbitMQ

import amqp from 'amqplib';
import { config } from '../config';

// =============================================================================
// EVENT TYPES
// =============================================================================

export interface BillingEvent {
  eventType: string;
  timestamp: string;
  source: string;
  data: Record<string, unknown>;
}

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

// =============================================================================
// EVENT PUBLISHER
// =============================================================================

class EventPublisher {
  private connection: amqp.ChannelModel | null = null;
  private channel: amqp.Channel | null = null;
  private isConnected: boolean = false;
  private reconnectAttempts: number = 0;
  private maxReconnectAttempts: number = 5;
  private reconnectDelay: number = 5000;

  private readonly exchangeName = 'billing_events';
  private readonly exchangeType = 'topic';

  async connect(): Promise<void> {
    if (this.isConnected) return;

    try {
      const rabbitUrl = config.rabbitmq?.url || process.env.RABBITMQ_URL || 'amqp://localhost:5672';
      
      this.connection = await amqp.connect(rabbitUrl);
      this.channel = await this.connection.createChannel();

      await this.channel.assertExchange(this.exchangeName, this.exchangeType, {
        durable: true,
      });

      this.isConnected = true;
      this.reconnectAttempts = 0;
      
      console.log('📨 Connected to RabbitMQ');

      this.connection.on('close', () => {
        console.log('📨 RabbitMQ connection closed');
        this.isConnected = false;
        this.handleReconnect();
      });

      this.connection.on('error', (err: Error) => {
        console.error('📨 RabbitMQ connection error:', err.message);
        this.isConnected = false;
      });

    } catch (error) {
      console.error('📨 Failed to connect to RabbitMQ:', error);
      this.handleReconnect();
    }
  }

  private handleReconnect(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('📨 Max reconnection attempts reached');
      return;
    }

    this.reconnectAttempts++;
    console.log(`📨 Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
    
    setTimeout(() => {
      this.connect();
    }, this.reconnectDelay * this.reconnectAttempts);
  }

  async publish(event: BillingEventType): Promise<boolean> {
    const fullEvent: BillingEvent = {
      eventType: event.eventType,
      timestamp: new Date().toISOString(),
      source: 'billing-service',
      data: event as unknown as Record<string, unknown>,
    };

    const routingKey = event.eventType.replace('.', '_');

    if (!this.isConnected || !this.channel) {
      console.warn('📨 RabbitMQ not connected. Event queued:', event.eventType);
      return false;
    }

    try {
      const message = Buffer.from(JSON.stringify(fullEvent));
      
      this.channel.publish(
        this.exchangeName,
        routingKey,
        message,
        {
          persistent: true,
          contentType: 'application/json',
          timestamp: Date.now(),
        }
      );

      console.log(`📨 Published event: ${event.eventType}`);
      return true;
    } catch (error) {
      console.error('📨 Failed to publish event:', error);
      return false;
    }
  }

  async disconnect(): Promise<void> {
    if (this.channel) {
      await this.channel.close();
      this.channel = null;
    }
    if (this.connection) {
      await this.connection.close();
      this.connection = null;
    }
    this.isConnected = false;
    console.log('📨 Disconnected from RabbitMQ');
  }

  isReady(): boolean {
    return this.isConnected;
  }
}

export const eventPublisher = new EventPublisher();

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export async function publishInvoiceCreated(data: Omit<InvoiceCreatedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'invoice.created', ...data });
}

export async function publishInvoiceSent(data: Omit<InvoiceSentEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'invoice.sent', ...data });
}

export async function publishInvoicePaid(data: Omit<InvoicePaidEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'invoice.paid', ...data });
}

export async function publishInvoiceOverdue(data: Omit<InvoiceOverdueEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'invoice.overdue', ...data });
}

export async function publishPaymentInitiated(data: Omit<PaymentInitiatedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'payment.initiated', ...data });
}

export async function publishPaymentCompleted(data: Omit<PaymentCompletedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'payment.completed', ...data });
}

export async function publishPaymentFailed(data: Omit<PaymentFailedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'payment.failed', ...data });
}

export async function publishPaymentRefunded(data: Omit<PaymentRefundedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'payment.refunded', ...data });
}

export async function publishCouponApplied(data: Omit<CouponAppliedEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'coupon.applied', ...data });
}

export async function publishCouponExpired(data: Omit<CouponExpiredEvent, 'eventType'>): Promise<boolean> {
  return eventPublisher.publish({ eventType: 'coupon.expired', ...data });
}

export default eventPublisher;
