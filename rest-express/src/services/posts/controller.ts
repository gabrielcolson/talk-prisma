import knex from '../../config/knex';
import { Post } from './Post';

const getOne = async (postId: string): Promise<Post> => {
  return knex('posts').select('*').where({
    id: postId,
  }).limit(1).first();
};

const getAll = async (): Promise<Post[]> => {
  return knex('posts').select('*');
};

const getByAuthor = async (authorId: string): Promise<Post[]> => {
  return knex('posts').select('*').where({ author: authorId });
};

const create = async (author: string, title: string, content: string): Promise<void> => {
  return knex('posts').insert({
    author,
    content,
    title,
  });
};

const remove = async (postId: string): Promise<void> => {
  return knex('posts').where({
    id: postId,
  }).del();
};

export default { getOne, getAll, getByAuthor, create, remove };
