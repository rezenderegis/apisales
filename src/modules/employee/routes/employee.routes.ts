import isAuthenticated from "@shared/http/middleware/isAuthenticated";
import { celebrate, Segments,Joi } from "celebrate";

import { Router } from "express";
import EmployeeController from "../controllers/EmployeeController";
const employeeController = new EmployeeController();
const employeeRouter = Router();

//customerRouter.use(isAuthenticated);
employeeRouter.post('/', 

employeeController.create);

employeeRouter.get('/', employeeController.index);

employeeRouter.put('/:id', employeeController.update);

employeeRouter.delete('/:id', employeeController.delete);

employeeRouter.get('/:id', employeeController.show);

export default employeeRouter;