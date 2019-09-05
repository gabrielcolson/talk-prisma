import knex from '../config/knex';
import { User } from './User';

const getAll = async (): Promise<User[]> => {
  return knex('users')
    .select('*');
};

const getOne = async (userId: string): Promise<User> => {
  return knex('users')
    .select('*')
    .where({ id: userId})
    .limit(1)
    .first();
};

const create = async (firstname: string, lastname: string): Promise<null> => {
  return knex('users')
    .insert({
      firstname,
      lastname,
    })
};

const remove = async (userId: string): Promise<null> => {
  return knex('users')
    .where({ id: userId })
    .del()
    .limit(1);
};

export default { getAll, getOne, create, remove };
