import { Router } from 'express';
import { getUsers } from './middlewares';

const router = Router();

router.get('/', getUsers);

export default router;
