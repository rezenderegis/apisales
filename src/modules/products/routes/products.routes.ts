import {Router} from 'express';
import ProducsController from '../controllers/ProductsControler';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
const productsRouter = Router();
const productsController = new ProducsController();

productsRouter.get('/', productsController.index);
productsRouter.get('/:id', productsController.show);
productsRouter.post('/', productsController.create);
productsRouter.put('/:id', productsController.update);
productsRouter.delete('/:id', productsController.delete);

/* productsRouter is a file with all routes. We need to import this file
in main route file index.ts
*/




export default productsRouter;