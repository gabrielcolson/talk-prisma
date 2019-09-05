import { Request, Response } from 'express';
import userController from './controller';

const getUsers = async (req: Request, res: Response): Promise<Response> => {
  const users = await userController.getAll();
  return res.status(200).json({ users });
};

const getUser = async (req: Request, res: Response): Promise<Response> => {
  const { userId } = req.params;
  const user = await userController.getOne(userId);
  if (user === undefined) {
    return res.sendStatus(404);
  }
  return res.status(200).json({ user });
};

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const { firstname, lastname } = req.body;
  if (firstname === undefined || lastname === undefined) {
    return res.sendStatus(400);
  }
  try {
    await userController.create(firstname, lastname);
    return res.sendStatus(201);
  } catch (err) {
    return res.status(400);
  }
};

const removeUser = async (req: Request, res: Response): Promise<Response> => {
  const { userId } = req.params;
  try {
    await userController.remove(userId);
  } catch (err) {
    console.error(err);
    return res.sendStatus(400);
  }
  return res.sendStatus(200);
};

export { getUsers, getUser, createUser, removeUser };
