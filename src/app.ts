import express from 'express';
import UserRoutes from './routes/users';
import LoginRoutes from './routes/login';
import ProductRoutes from './routes/products';
import OrderRoutes from './routes/orders';
import errorHandler from './middlewares/errorHandler';
import authValidation from './middlewares/authValidation';

const app = express();

app.use(express.json());

app.use(authValidation);

app.use('/users', UserRoutes);
app.use('/login', LoginRoutes);
app.use('/products', ProductRoutes);
app.use('/orders', OrderRoutes);

app.use(errorHandler);

export default app;
