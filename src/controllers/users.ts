import { NextFunction, Request, Response } from 'express';
import User from '../services/User';
import { ILogin, IUser } from '../interfaces/User';
import { Token } from '../interfaces/Token';
import StatusCode from '../enums/StatusCode';

const validateUser = (req:Request, _res:Response, next:NextFunction) => {
  const user: IUser = req.body;
  const validation = User.validateUser(user);
  if (validation.error) return next(validation.error);
  next();
};

const validateLogin = (req:Request, _res:Response, next:NextFunction) => {
  const user: ILogin = req.body;
  const validation = User.validateLogin(user);
  if (validation.error) return next(validation.error);
  next();
};

const create = async (req:Request, res:Response) => {
  const user: IUser = req.body;
  const token: Token = await User.create(user);
  res.status(StatusCode.CREATED).json(token);
};

const login = async (req:Request, res:Response, next:NextFunction) => {
  const user: ILogin = req.body;
  const loginToken = await User.login(user);
  if (loginToken.error) return next(loginToken);
  res.status(StatusCode.OK).json(loginToken);
};
export default {
  create,
  validateUser,
  validateLogin,
  login,
};
