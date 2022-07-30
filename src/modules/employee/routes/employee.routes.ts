import isAuthenticated from "@shared/http/middleware/isAuthenticated";
import { celebrate, Segments,Joi } from "celebrate";

import { Router } from "express";
import EmployeeController from "../controllers/EmployeeController";
const employeeController = new EmployeeController();
const customerRouter = Router();

//customerRouter.use(isAuthenticated);
customerRouter.post('/', 

employeeController.create);


export default customerRouter;