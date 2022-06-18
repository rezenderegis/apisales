import productsRouter from '@modules/products/infra/http/routes/products.routes';
import brandsRouter from '@modules/brands/routes/brands.routes';

import {Router} from 'express';
import userRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import customerRouter from '@modules/customers/infra/http/routes/customers.routes';
import salesRouter from '@modules/sales/routes/sales.routes';
import passwordRouter from '@modules/users/routes/password.routes';
import profileRouter from '@modules/users/routes/profile.routes';
import ordersRouter from '@modules/orders/routes/orders.routes';
const routes = Router();

routes.use('/products', productsRouter);

routes.use('/users', userRouter);

routes.use('/sessions', sessionsRouter);

routes.use('/brands', brandsRouter)
routes.use('/customers', customerRouter);
routes.use('/sales', salesRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/orders', ordersRouter);

export default routes;
