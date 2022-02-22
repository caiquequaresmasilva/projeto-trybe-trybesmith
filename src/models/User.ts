import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/User';

const create = async (user: IUser): Promise<void> => {
  const { username, classe, level, password } = user;
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
};

export default {
  create,
};
