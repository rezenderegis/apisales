import {Router} from 'express';
import isAuthenticated from "@shared/http/middleware/isAuthenticated";
import BrandsController from "../controllers/BrandsControllers";
const brandsRouter = Router();
const brandsController = new BrandsController();
brandsRouter.get('/', isAuthenticated, brandsController.index);

export default brandsRouter;