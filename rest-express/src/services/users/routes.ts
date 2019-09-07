import { Router } from 'express';

import { createUser, getUser, getUsers, removeUser } from './middlewares';

const router = Router();

router.get('/', getUsers);
router.get('/:userId', getUser);
router.post('/', createUser);
router.delete('/:userId', removeUser);

export default router;
