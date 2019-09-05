import knex from '../config/knex';
import { User } from './User';

const getAll = async (): Promise<User> => {
  return knex('users').select('id', 'firstname', 'lastname');
};

export default { getAll };
