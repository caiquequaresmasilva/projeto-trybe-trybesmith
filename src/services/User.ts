import { sign } from 'jsonwebtoken';
import User from '../models/User';
import { IUser } from '../interfaces/User';
import { Token, Payload } from '../interfaces/Token';
import userSchema from '../schemas/userSchema';

const { JWT_SECRET = 'papibaquigrafo' } = process.env;

const validateUser = (user: IUser) => {
  const validation = userSchema.validate(user);
  return validation;
};

const generateToken = (payload: Payload): string => sign(payload, JWT_SECRET, {
  algorithm: 'HS256',
  expiresIn: '1d',
});

const create = async (user: IUser) : Promise<Token> => {
  const newUser = await User.create(user);
  const { id, username } = newUser;

  const token = generateToken({ id, username });

  return { token };
};

export default {
  create,
  validateUser,
};