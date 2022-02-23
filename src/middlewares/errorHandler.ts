import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'joi';
import JoiStatusCode from '../schemas/JoiStatusCode';

interface GeneralizedErros extends ValidationError{
  code?: number
}

export default (error: GeneralizedErros, req: Request, res: Response, _next: NextFunction) => {
  let status: number;
  if (error.isJoi) {
    const type: string = error.details[0].type.split('.')[1];
    status = JoiStatusCode[type];
    return res.status(status).json({ error: error.details[0].message });  
  }
    
  status = typeof error.code === 'number' ? error.code : 500;
    
  res.status(status).json({ error: error.message });
};