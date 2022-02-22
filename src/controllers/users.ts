import { NextFunction, Request, Response } from 'express';
import User from '../services/User';
import { IUser } from '../interfaces/User';
import { Token } from '../interfaces/Token';

const validateUser = (req:Request, _res:Response, next:NextFunction) => {
  const user: IUser = req.body;
  const validation = User.validateUser(user);
  if (validation.error) return next(validation.error);
  next();
};

const create = async (req:Request, res:Response) => {
  const user: IUser = req.body;
  const token: Token = await User.create(user);
  res.status(201).json(token);
};

export default {
  create,
  validateUser,
};
