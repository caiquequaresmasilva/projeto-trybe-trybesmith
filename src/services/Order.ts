import Order from '../models/Order';
import Product from '../models/Product';
import orderSchema from '../schemas/orderSchema';
import { INewOrder, IOrder, IResponseOrder } from '../interfaces/Order'; 

const validateOrder = (order: IOrder) => {
  const validation = orderSchema.validate(order);
  return validation;
};

const create = async (order: INewOrder): Promise<IResponseOrder> => {
  const { products, userId } = order;
  const orderId : number = await Order.create(userId);
  await Product.setOrder(products, orderId);
  return { order };
};

export default {
  create,
  validateOrder,
};