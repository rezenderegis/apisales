import {Router} from 'express';
import {celebrate,Joi, Segments} from 'celebrate';
import isAuthenticated from '@shared/infra/http/middleware/isAuthenticated';
import OrdersControler from '../controllers/OrdersControler';
const ordersRouter = Router();
const ordersController = new OrdersControler();

ordersRouter.get('/:id',
celebrate({
    [Segments.PARAMS]: {id:Joi.string().uuid().required(),}
}),
isAuthenticated,
ordersController.show);


ordersRouter.post('/', 
celebrate({[Segments.BODY]: {
    customer_id: Joi.string().uuid().required(),
    products: Joi.required(),
    }
}),
isAuthenticated,
ordersController.create);



export default ordersRouter;