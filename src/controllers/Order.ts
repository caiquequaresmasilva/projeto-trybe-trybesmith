import { NextFunction, Request, Response } from 'express';
import Order from '../services/Order';
import StatusCode from '../enums/StatusCode';
import { IOrder, IResponseOrder } from '../interfaces/Order';
import RequestWithUserId from '../interfaces/Request';

const validateOrder = (req:Request, _res:Response, next:NextFunction) => {
  const order: IOrder = req.body;
  const validation = Order.validateOrder(order);
  if (validation.error) return next(validation.error);
  next();
};

const create = async (req:RequestWithUserId, res:Response) => {
  const { userId, body: { products } } = req;
  const newOrder: IResponseOrder = await Order.create({ userId, products });
  res.status(StatusCode.CREATED).json(newOrder);
};

export default {
  validateOrder,
  create,

};