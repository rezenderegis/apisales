import { Router } from "express";
import CustomerController from "../controllers/CustomerController";
const customerController = new CustomerController();
const customerRouter = Router();

customerRouter.post('/', customerController.create);

export default customerRouter;