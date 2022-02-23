import { NextFunction, Request, Response } from 'express';
import Product from '../services/Products';
import StatusCode from '../enums/StatusCode';
import { INewProduct, IProduct, IResponseProd } from '../interfaces/Product';

const validateProd = (req:Request, _res:Response, next:NextFunction) => {
  const prod: IProduct = req.body;
  const validation = Product.validateProd(prod);
  if (validation.error) return next(validation.error);
  next();
};

const create = async (req:Request, res:Response) => {
  const user: IProduct = req.body;
  const newProd: IResponseProd = await Product.create(user);
  res.status(StatusCode.CREATED).json(newProd);
};

const getAll = async (_req:Request, res:Response) => {
  const product: INewProduct[] = await Product.getAll();
  res.status(StatusCode.OK).json(product);
};

export default {
  validateProd,
  create,
  getAll,
};