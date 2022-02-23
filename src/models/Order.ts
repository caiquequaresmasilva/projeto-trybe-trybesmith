import { ResultSetHeader } from 'mysql2';
// import { INewOrder, INewOrderId, IOrder } from '../interfaces/Order';
import connection from './connection';

const create = async (userId: number): Promise<number> => {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
    [userId],
  );
  return id;
};

export default {
  create,
};