// Billing Service Entry Point
// Port 3007 - Invoice generation, payment processing, coupons, tax calculations

import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';

import { config } from './config';
import { errorHandler } from './middleware/errorHandler';

// Import routes
import invoiceRoutes from './routes/invoice.routes';
import paymentRoutes from './routes/payment.routes';
import couponRoutes from './routes/coupon.routes';

// Initialize Express app
const app: Express = express();

// =============================================================================
// MIDDLEWARE
// =============================================================================

// Security headers
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
}));

// CORS configuration
app.use(cors({
  origin: config.cors.origin,
  credentials: config.cors.credentials,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id'],
}));

// Compression
app.use(compression());

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Cookie parsing
app.use(cookieParser());

// Rate limiting
const limiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.maxRequests,
  message: { 
    success: false, 
    error: 'Too many requests, please try again later.' 
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api', limiter);

// =============================================================================
// HEALTH CHECK
// =============================================================================

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    service: config.serviceName,
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '1.0.0',
  });
});

// =============================================================================
// API ROUTES
// =============================================================================

// Request logging
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Invoice management
app.use('/api/invoices', invoiceRoutes);

// Payment management
app.use('/api/payments', paymentRoutes);

// Coupon management
app.use('/api/coupons', couponRoutes);

// =============================================================================
// ERROR HANDLING
// =============================================================================

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    path: req.path,
    method: req.method,
  });
});

// Global error handler
app.use(errorHandler);

// =============================================================================
// SERVER STARTUP
// =============================================================================

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║                                                                ║
║   💰 BILLING SERVICE                                           ║
║                                                                ║
║   Port: ${PORT}                                                  ║
║   Environment: ${config.nodeEnv.padEnd(44)}║
║                                                                ║
║   Endpoints:                                                   ║
║   • GET    /health                     Health check            ║
║   • GET    /api/invoices               List invoices           ║
║   • POST   /api/invoices               Create invoice          ║
║   • GET    /api/invoices/:id           Get invoice             ║
║   • PUT    /api/invoices/:id           Update invoice          ║
║   • DELETE /api/invoices/:id           Delete invoice          ║
║   • POST   /api/invoices/:id/send      Send invoice            ║
║   • POST   /api/invoices/:id/mark-paid Mark as paid            ║
║   • GET    /api/payments               List payments           ║
║   • POST   /api/payments               Create payment          ║
║   • GET    /api/payments/:id           Get payment             ║
║   • POST   /api/payments/:id/process   Process payment         ║
║   • POST   /api/payments/:id/refund    Refund payment          ║
║   • GET    /api/coupons                List coupons            ║
║   • POST   /api/coupons                Create coupon           ║
║   • POST   /api/coupons/validate       Validate coupon         ║
║                                                                ║
╚═══════════════════════════════════════════════════════════════╝
  `);
});

export default app;
