import isAuthenticated from "@shared/infra/http/middleware/isAuthenticated";
import { celebrate, Segments,Joi } from "celebrate";

import { Router } from "express";
import CustomerController from "../controllers/CustomerController";
import Customers from "../typeorm/entities/Customers";
const customerController = new CustomerController();
const customerRouter = Router();

customerRouter.use(isAuthenticated);
customerRouter.post('/', 
/*
celebrate ({
    [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),

    },
}),
*/
customerController.create);
customerRouter.get('/',customerController.index);
customerRouter.put('/:id',

celebrate ({
    [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),

    },
}),
customerController.update);
customerRouter.delete('/:id', 

celebrate ({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),

    },
}),
customerController.delete);
customerRouter.get('/:id', customerController.show);
export default customerRouter;