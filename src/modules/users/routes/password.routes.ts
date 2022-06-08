import { celebrate, Segments, Joi } from "celebrate";
import { Router } from "express";
import ForgotPasswordController from "../controllers/ForgotPasswordController";
import ResetPasswordController from "../controllers/ResetPasswordController";

const passwordRouter = Router();
const forgotePasswordController = new ForgotPasswordController();
const resetPassowrdController = new ResetPasswordController();
passwordRouter.post('/forgot',

    celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required(),
        },
    }), 
    forgotePasswordController.create);

    passwordRouter.post('/reset',

    celebrate({
        [Segments.BODY]: {
            token: Joi.string().uuid().required(),
            password: Joi.string().required(),
            password_confirmation: Joi.string().required().valid(Joi.ref('password'))
        },
    }), 
    resetPassowrdController.create);


export default passwordRouter;