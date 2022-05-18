import { celebrate, Segments,Joi } from "celebrate";
import { Router } from "express";
import UsersController from "../controllers/UsersController";
import isAuthenticated from "../../../shared/http/middleware/isAuthenticated";
import multer from 'multer';
import uploadConfig from '@config/upload';
import UsersAvatarController from "../controllers/UsersAvatarController";

const userRouter = Router();
const userController = new UsersController();
const usersAvatarController = new UsersAvatarController();

//We have here multer wit defined configuration
const upload = multer(uploadConfig);

userRouter.post('/', 
celebrate({[Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    },
}),
userController.create);

userRouter.get('/', isAuthenticated, userController.index);

userRouter.patch(
    '/avatar',
    isAuthenticated,
    upload.single('avatar'), //Upload middleare
    usersAvatarController.update,
    );


export default userRouter;