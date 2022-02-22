import { Request, Response, NextFunction } from 'express';
import Errors from '../interfaces/Errors';
import JoiStatusCode from '../schemas/JoiStatusCode';

export default (error: Errors, req: Request, res: Response, _next: NextFunction) => {
  let status: number;
  if (error.isJoi) {
    const type: string = error.details[0].type.split('.')[1];
    status = JoiStatusCode[type];
    return res.status(status).json({ error: error.details[0].message });  
  }
    
  status = error.code || 500;
    
  res.status(status).json({ message: error.message });
};