import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser, INewUser } from '../interfaces/User';

const create = async (user: IUser): Promise<INewUser> => {
  const { username, classe, level, password } = user;
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  const createdUser: INewUser = { id, username, classe, level, password };
  return createdUser;
};

export default {
  create,
};
