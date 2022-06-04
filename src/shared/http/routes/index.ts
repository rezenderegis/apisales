import productsRouter from '@modules/products/routes/products.routes';
import brandsRouter from '@modules/brands/routes/brands.routes';

import {Router} from 'express';
import userRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import customerRouter from '@modules/customers/routes/customers.routes'
const routes = Router();

routes.use('/products', productsRouter);

routes.use('/users', userRouter);

routes.use('/sessions', sessionsRouter);

routes.use('/brands', brandsRouter)
routes.use('/customers', customerRouter);
export default routes;
