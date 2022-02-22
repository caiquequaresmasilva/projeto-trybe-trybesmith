import express from 'express';
import UserRoutes from './routes/users';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/users', UserRoutes);

app.use(errorHandler);

export default app;
