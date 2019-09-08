import express, { Request, Response } from 'express';

import postRouter from './services/posts/routes';
import userRouter from './services/users/routes';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.use('*', (req: Request, res: Response) => res.sendStatus(404));

app.listen(3000, () => console.log('Server listening on port 3000!'));
