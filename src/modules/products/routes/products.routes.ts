import {Router} from 'express';
import ProducsController from '../controllers/ProductsControler';
const productsRouter = Router();
const productsController = new ProducsController();

productsRouter.post('/', productsController.create);

/* productsRouter is a file with all routes. We need to import this file
in main route file index.ts
*/
export default productsRouter;