import Product from '../models/Product';
import productSchema from '../schemas/productSchema';
import { INewProduct, IProduct, IResponseProd } from '../interfaces/Product';

const validateProd = (product: IProduct) => {
  const validation = productSchema.validate(product);
  return validation;
};

const create = async (product: IProduct) : Promise<IResponseProd> => {
  const newProd: INewProduct = await Product.create(product);
  return { item: newProd };
};

const getAll = async () : Promise<INewProduct[]> => Product.getAll();

export default {
  create,
  validateProd,
  getAll,
};