import Product from '../models/Product';
// import StatusCode from '../enums/StatusCode';
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

export default {
  create,
  validateProd,
};