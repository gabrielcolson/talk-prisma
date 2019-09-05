import knex from '../config/knex';
import { Request, Response } from 'express';
import userController from './controller';

const getUsers = async (req: Request, res: Response): Promise<Response> => {
  const users = await userController.getAll();
  return res.json({ users });
};

export { getUsers };
