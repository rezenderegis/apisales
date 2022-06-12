import { celebrate, Segments,Joi } from "celebrate";
import { Router } from "express";
import UsersController from "../controllers/UsersController";
import isAuthenticated from "../../../shared/http/middleware/isAuthenticated";
import uploadConfig from '@config/upload';
import UsersAvatarController from "../controllers/UsersAvatarController";
import ProfileController from "../controllers/ProfileController";
import { JoinColumn } from "typeorm";

const profileRouter = Router();
const profileController = new ProfileController();
const userController = new UsersController();
const usersAvatarController = new UsersAvatarController();

profileRouter.use(isAuthenticated);

profileRouter.get('/', profileController.show);

profileRouter.put('/', 
celebrate({[Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    old_password: Joi.string(),
    password: Joi.string().optional(),
    password_confirmation: Joi.string()
        .valid(Joi.ref('password'))
        .when('password', {
        //Will include password_confirmation mandatory when password seted.
            is: Joi.exist(),
            then: Joi.required(),
        })
    },
}),
profileController.update);




export default profileRouter;