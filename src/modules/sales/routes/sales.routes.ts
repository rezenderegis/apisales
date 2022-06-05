import { Router } from "express";
import SallesController from "../controllers/SalesController";
const salesController = new SallesController();
const salesRouter = Router();

salesRouter.get('/', salesController.list );
salesRouter.post('/', salesController.create);
export default salesRouter;