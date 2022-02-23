import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser, INewUser } from '../interfaces/User';

const create = async (user: IUser): Promise<INewUser> => {
  const { username, classe, level, password } = user;
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  const createdUser: INewUser = { id, username, classe, level, password };
  return createdUser;
};

const findByUsername = async (username: string): Promise<INewUser> => {
  const [user] = await connection.execute(
    'SELECT * FROM Trybesmith.Users WHERE username=?',
    [username],
  );
  const [row] = user as INewUser[];
  return row;
};

export default {
  create,
  findByUsername,
};
