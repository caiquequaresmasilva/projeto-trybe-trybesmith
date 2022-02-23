import { Request, Response, NextFunction } from 'express';
import User from '../services/User';

export default async (req:Request, _res:Response, next:NextFunction) => {
  const { method, originalUrl } = req;
  const authFlag = !(method === 'POST' && ['/user', '/login'].includes(originalUrl));
  if (authFlag) {
    const { authorization } = req.headers;
    const validation = User.authValidation(authorization);
    if (validation.error) return next(validation);
  }
  next();
};