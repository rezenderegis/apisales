import {Router} from 'express';
import ProducsController from '../controllers/ProductsControler';
import {celebrate,Joi, Segments} from 'celebrate';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
const productsRouter = Router();
const productsController = new ProducsController();

productsRouter.get('/', productsController.index);

/*Included celebrate to validate request. Middleware on celebrate function
Import here and server.ts
*/
productsRouter.get('/:id',
celebrate({
    [Segments.PARAMS]: {id:Joi.string().uuid().required(),}
}),
productsController.show);


productsRouter.post('/', 
celebrate({[Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().precision(2).required(),
    quantity: Joi.number().required(),
    }
}),
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
productsController.update);
productsRouter.delete('/:id', 
    celebrate({
        [Segments.PARAMS]: { id: Joi.string().uuid().required(), }
    }),

productsController.delete);

/* productsRouter is a file with all routes. We need to import this file
in main route file index.ts
*/




export default productsRouter;