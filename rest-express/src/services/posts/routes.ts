import { Router } from 'express';

import {
  getPosts,
  getPost,
  getPostByAuthor,
  createPost,
  removePost
} from './middlewares';

const router = Router();

router.get('/', getPosts);
router.get('/:postId', getPost);
router.get('/author/:authorId', getPostByAuthor);
router.post('/', createPost);
router.delete('/:postId', removePost);

export default router;
