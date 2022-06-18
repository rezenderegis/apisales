import {Router} from 'express';
import BrandsController from "../controllers/BrandsControllers";
const brandsRouter = Router();
const brandsController = new BrandsController();

brandsRouter.get('/', brandsController.index);

brandsRouter.post('/',  brandsController.create);

brandsRouter.put('/:id', brandsController.update);

brandsRouter.get('/:id', brandsController.show);

brandsRouter.delete('/:id', brandsController.delete);

export default brandsRouter;