import express from 'express';
import cors from 'cors';

import 'dotenv/config';
import { router } from '@/routes';
import { errorMiddleware } from '@/middlewares/error';

const server = express();

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }));

server.use('/', router);


server.use(errorMiddleware);
export { server };