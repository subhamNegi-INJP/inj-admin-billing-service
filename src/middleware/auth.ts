// Authentication middleware for Product Service
// Validates JWT tokens (issued by Identity Service)

import { Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import { sendUnauthorized, sendForbidden } from '../utils/response';
import type { AuthenticatedRequest, JWTPayload } from '../types';

/**
 * Extract JWT token from Authorization header or cookies
 */
const extractToken = (req: AuthenticatedRequest): string | null => {
  // Check Authorization header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }

  // Check cookies
  if (req.cookies?.accessToken) {
    return req.cookies.accessToken;
  }

  return null;
};

/**
 * Authenticate middleware - validates JWT token and attaches user info to request
 */
export const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = extractToken(req);
    console.log('[Auth] Token present:', !!token, 'Authorization header:', req.headers.authorization?.substring(0, 30) + '...');

    if (!token) {
      sendUnauthorized(res, 'Authentication required');
      return;
    }

    // Verify token
    const decoded = verifyToken(token);
    console.log('[Auth] Token decoded:', decoded ? `userId=${decoded.userId}` : 'FAILED');
    
    if (!decoded) {
      console.log('[Auth] Sending 401 - Invalid or expired token');
      sendUnauthorized(res, 'Invalid or expired token');
      return;
    }

    // Attach user info to request
    req.user = decoded;
    req.userId = decoded.userId;
    req.userType = 'user';

    console.log('[Auth] Authentication successful, calling next()');
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    sendUnauthorized(res, 'Authentication failed');
  }
};

/**
 * Optional authentication - doesn't fail if no token, but attaches user if valid
 */
export const optionalAuth = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = extractToken(req);

    if (token) {
      const decoded = verifyToken(token);
      if (decoded) {
        req.user = decoded;
        req.userId = decoded.userId;
        req.userType = 'user';
      }
    }

    next();
  } catch (error) {
    // Silent fail for optional auth
    next();
  }
};
