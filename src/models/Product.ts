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

export default {
  create,
};