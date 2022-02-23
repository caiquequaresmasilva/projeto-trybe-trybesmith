import Order from '../models/Order';
import Product from '../models/Product';
import orderSchema from '../schemas/orderSchema';
import { INewOrder, INewOrderId, IOrder, IResponseOrder } from '../interfaces/Order'; 
import StatusCode from '../enums/StatusCode';

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

const getOrder = async (id: number) => {
  const orderUser = await Order.getOrderUser(id);
  if (orderUser.length === 0) { 
    return { code: StatusCode.NOT_FOUND, message: 'Order not found', error: true }; 
  }
  const orderProd = await Order.getOrderProducts(id);
  return {
    id,
    userId: orderUser[0].userId,
    products: orderProd.map((prod) => prod.id),
  };
};

const getAll = async () : Promise<INewOrderId[]> => {
  const ordersIds = await Order.getAllOrders();
  const orders = await Promise.all(ordersIds.map(({ id }) => getOrder(id)));
  return orders as INewOrderId[];
};

export default {
  create,
  validateOrder,
  getOrder,
  getAll,
};