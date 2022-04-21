import productsRouter from '@modules/products/routes/products.routes';
import {Router} from 'express';
import userRouter from '@modules/users/routes/users.routes';
const routes = Router();

routes.use('/products', productsRouter);

routes.use('/users', userRouter);

export default routes;
