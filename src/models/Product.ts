import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { INewProduct, IProduct } from '../interfaces/Product';

const create = async (product: IProduct): Promise<INewProduct> => {
  const { name, amount } = product;
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const newProd: INewProduct = { id, name, amount };
  return newProd;
};

const getAll = async (): Promise<INewProduct[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return products as INewProduct[];
};

const setOrder = async (products: number[], orderId: number) : Promise<void> => {
  await connection.query(
    'UPDATE Trybesmith.Products SET orderId = ? WHERE id IN ?',
    [orderId, [products]],
  );
};

export default {
  create,
  getAll,
  setOrder,
};