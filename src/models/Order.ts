import { ResultSetHeader } from 'mysql2';
import connection from './connection';

type UserId = { userId: number };
type ProdId = { id: number };

const create = async (userId: number | undefined): Promise<number> => {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
    [userId],
  );
  return id;
};

const getOrderUser = async (orderId:number) => {
  const [user] = await connection.execute(
    'SELECT userId FROM Trybesmith.Orders WHERE id = ?',
    [orderId],
  );
  return user as UserId[];
};

const getOrderProducts = async (orderId: number) => {
  const [product] = await connection.execute(
    'SELECT id FROM Trybesmith.Products WHERE orderId = ?',
    [orderId],
  );
  return product as ProdId[];
};

const getAllOrders = async () : Promise<ProdId[]> => {
  const [orders] = await connection.execute('SELECT id FROM Trybesmith.Orders');
  return orders as ProdId[];
};

export default {
  create,
  getOrderUser,
  getOrderProducts,
  getAllOrders,
};