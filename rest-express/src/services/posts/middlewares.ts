import { Request, Response } from 'express';

import postController from './controller';

const getPosts = async (req: Request, res: Response): Promise<Response> => {
  const posts = await postController.getAll();
  return res.status(200).json({ posts });
};

const getPost = async (req: Request, res: Response): Promise<Response> => {
  const { postId } = req.params;
  const post = await postController.getOne(postId);
  if (post === undefined) {
    return res.sendStatus(404);
  }
  return res.status(200).json({ post });
};

const getPostByAuthor = async (req: Request, res: Response): Promise<Response> => {
  const { authorId } = req.params;
  const posts = await postController.getByAuthor(authorId);
  return res.status(200).json({ posts });
};

const createPost = async (req: Request, res: Response): Promise<Response> => {
  const { author, title, content } = req.body;
  if (author === undefined ||  title === undefined || content === undefined) {
    return res.sendStatus(400);
  }
  try {
    await postController.create(author, title, content);
  } catch (err) {
    return res.sendStatus(400);
  }
  return res.sendStatus(201);
};

const removePost = async (req: Request, res: Response): Promise<Response> => {
  const { postId } = req.params;
  try {
    await postController.remove(postId);
  } catch (err) {
    return res.sendStatus(400);
  }
  return res.sendStatus(200);
};

export {
  getPosts,
  getPost,
  getPostByAuthor,
  createPost,
  removePost,
}
