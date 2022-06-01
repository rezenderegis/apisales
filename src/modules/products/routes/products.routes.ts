import {Router} from 'express';
import ProducsController from '../controllers/ProductsControler';
import {celebrate,Joi, Segments} from 'celebrate';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import isAuthenticated from '@shared/http/middleware/isAuthenticated';
const productsRouter = Router();
const productsController = new ProducsController();

productsRouter.get('/', isAuthenticated, productsController.index);

/*Included celebrate to validate request. Middleware on celebrate function
Import here and server.ts
*/
productsRouter.get('/:id',
celebrate({
    [Segments.PARAMS]: {id:Joi.string().uuid().required(),}
}),
isAuthenticated,
productsController.show);


productsRouter.post('/', 
celebrate({[Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().precision(2).required(),
    quantity: Joi.number().required(),
    }
}),
isAuthenticated,
productsController.create);

productsRouter.put('/:id', 
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            price: Joi.number().precision(2).required(),
            quantity: Joi.number().required(),
        },
        [Segments.PARAMS]: { id: Joi.string().uuid().required(), }
    }),
isAuthenticated,
productsController.update);

productsRouter.delete('/:id', 
    celebrate({
        [Segments.PARAMS]: { id: Joi.string().uuid().required(), }
    }),
isAuthenticated,
productsController.delete);

/* productsRouter is a file with all routes. We need to import this file
in main route file index.ts
*/




export default productsRouter;