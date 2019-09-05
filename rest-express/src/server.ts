import express from 'express';

import userRouter from './users/routes';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.listen(3000, () => console.log('Server listening on port 3000!'));
