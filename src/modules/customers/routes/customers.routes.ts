import { Router } from "express";
import CustomerController from "../controllers/CustomerController";
const customerController = new CustomerController();
const customerRouter = Router();

customerRouter.post('/', customerController.create);
customerRouter.get('/',customerController.index);
customerRouter.put('/:id', customerController.update);
customerRouter.delete('/:id', customerController.delete);
export default customerRouter;