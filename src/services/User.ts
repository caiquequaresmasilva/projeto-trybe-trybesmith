import UserModel from '../models/User';
import { IUser } from '../interfaces/User';

const { JWT_SECRET = 'papibaquigrafo'} = process.env

const create = async (user: IUser)