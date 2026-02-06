// billing Service Configuration

import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const config = {
  // Server settings
  port: parseInt(process.env.PORT || '3007', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  serviceName: process.env.SERVICE_NAME || 'billing-service',
  
  // JWT settings (shared with Identity Service)
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production',
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  },
  
  // Database URL
  databaseUrl: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/billing_db?schema=public',
  
  // Redis settings (for caching subscription validation)
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    enabled: process.env.REDIS_ENABLED === 'true',
  },
  
  // RabbitMQ settings (for events)
  rabbitmq: {
    url: process.env.RABBITMQ_URL || 'amqp://guest:guest@localhost:5672',
    exchange: 'billing.events',
  },
  
  // CORS settings
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
  },
  
  // Rate limiting
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10),
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10),
  },
  
  // External API rate limiting (stricter for product systems)
  externalRateLimit: {
    windowMs: parseInt(process.env.EXTERNAL_RATE_LIMIT_WINDOW_MS || '60000', 10),
    maxRequests: parseInt(process.env.EXTERNAL_RATE_LIMIT_MAX_REQUESTS || '1000', 10),
  },
  
  // Identity Service URL (for token validation if needed)
  identityServiceUrl: process.env.IDENTITY_SERVICE_URL || 'http://localhost:3001',
  
  // Logging
  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
};

export default config;
