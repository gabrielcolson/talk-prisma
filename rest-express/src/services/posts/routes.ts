import { Router } from 'express';

import {
  createPost,
  getPost,
  getPostByAuthor,
  getPosts,
  removePost,
} from './middlewares';

const router = Router();

router.get('/', getPosts);
router.get('/:postId', getPost);
router.get('/author/:authorId', getPostByAuthor);
router.post('/', createPost);
router.delete('/:postId', removePost);

export default router;
