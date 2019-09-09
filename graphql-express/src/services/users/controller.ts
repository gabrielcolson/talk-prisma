import knex from '../../config/knex';
import { User } from './User';

const getAll = async (): Promise<User[]> => {
  return knex('users')
    .select('*');
};

const getOne = async (id: number): Promise<User> => {
  return knex('users')
    .select('*')
    .where({ id })
    .limit(1)
    .first();
};

const create = async (firstname: string, lastname: string): Promise<void> => {
  return knex('users')
    .insert({
      firstname,
      lastname,
    });
};

const remove = async (id: number): Promise<void> => {
  return knex('users')
    .where({ id })
    .del();
};

export default { getAll, getOne, create, remove };
