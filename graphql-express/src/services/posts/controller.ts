import knex from '../../config/knex';
import { Post } from './Post';

const getAll = async (): Promise<Post[]> => {
  return knex('posts')
    .select('*');
};

const getOne = async (id: number): Promise<Post> => {
  return knex('posts')
    .select('*')
    .where({ id })
    .limit(1)
    .first();
};

const getByAuthor = async (authorId: number): Promise<Post[]> => {
  return knex('posts')
    .select('*')
    .where({ author: authorId });
};

const create = async (authorId: number, title: string, content: string): Promise<void> => {
  return knex('posts')
    .insert({
      author: authorId,
      content,
      title,
    });
};

const remove = async (id: number): Promise<void> => {
  return knex('posts')
    .where({ id })
    .del();
};

export default { getOne, getAll, getByAuthor, create, remove };
