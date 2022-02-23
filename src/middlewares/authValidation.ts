import { Request, Response, NextFunction } from 'express';
import User from '../services/User';

interface RequestWithUserId extends Request{
  userId?: number
} 

export default async (req:RequestWithUserId, _res:Response, next:NextFunction) => {
  const { method, originalUrl } = req;
  const authFlag = !(method === 'POST' && ['/users', '/login'].includes(originalUrl));
  if (authFlag) {
    const { authorization } = req.headers;
    const validation = User.authValidation(authorization);
    if (validation.error) return next(validation);
    req.userId = validation.id;
  }
  next();
};