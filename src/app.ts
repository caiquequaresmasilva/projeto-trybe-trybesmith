import express from 'express';
import UserRoutes from './routes/users';
import LoginRoutes from './routes/login';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/users', UserRoutes);
app.use('/login', LoginRoutes);

app.use(errorHandler);

export default app;
