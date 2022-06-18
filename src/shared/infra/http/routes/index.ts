import productsRouter from '@modules/products/infra/http/routes/products.routes';
import brandsRouter from '@modules/brands/routes/brands.routes';

import {Router} from 'express';
import userRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import customerRouter from '@modules/customers/infra/http/routes/customers.routes';
import salesRouter from '@modules/sales/infra/http/routes/sales.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import ordersRouter from '@modules/orders/infra/http/routes/orders.routes';
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
