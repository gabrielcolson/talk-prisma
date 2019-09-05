import { Router } from 'express';
import { getUsers, getUser, createUser, removeUser } from './middlewares';

const router = Router();

router.get('/', getUsers);
router.get('/:userId', getUser);
router.post('/', createUser);
router.delete('/:userId', removeUser);

export default router;
