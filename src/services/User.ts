import { sign, verify } from 'jsonwebtoken';
import User from '../models/User';
import { IUser, ILogin } from '../interfaces/User';
import { Token, Payload } from '../interfaces/Token';
import userSchema from '../schemas/userSchema';
import loginSchema from '../schemas/loginSchema';
import StatusCode from '../enums/StatusCode';

const { JWT_SECRET = 'papibaquigrafo' } = process.env;

const validateUser = (user: IUser) => {
  const validation = userSchema.validate(user);
  return validation;
};

const validateLogin = (user: ILogin) => {
  const validation = loginSchema.validate(user);
  return validation;
};

const authValidation = (token:string | undefined) => {
  if (!token) return { code: StatusCode.UNAUTHORIZED, message: 'Token not found', error: true };
  try {
    const user = verify(token, JWT_SECRET);
    // FONTE:https://stackoverflow.com/questions/50735675/typescript-jwt-verify-cannot-access-data
    return { id: (<any>user).id };
  } catch (_) {
    return { code: StatusCode.UNAUTHORIZED, message: 'Invalid token', error: true };
  }
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

const login = async (user:ILogin) => {
  const checkUser = await User.findByUsername(user.username);
  if (!checkUser || checkUser.password !== user.password) { 
    return { code: StatusCode.UNAUTHORIZED, message: 'Username or password invalid', error: true }; 
  }
  const token = generateToken({ id: checkUser.id, username: checkUser.username });
  return { token };
};

export default {
  create,
  validateUser,
  validateLogin,
  authValidation,
  login,
};