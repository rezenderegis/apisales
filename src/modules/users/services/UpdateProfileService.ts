import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import {compare, hash} from 'bcryptjs';
import UsersController from "../controllers/UsersController";
import User from "../typeorm/entities/Users";
import UsersRepository from "../typeorm/repositories/UserRepository";

interface IRequest {
    user_id: string;
    name: string; 
    email: string;
    //Change password is a option (?)
    password?: string;
    old_password?: string;
}
class UpdateProfileService {

    public async execute ({user_id,name,email,password,old_password}:IRequest): Promise<User> {

        const userRepository = getCustomRepository(UsersRepository);

        const user = await userRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found');
        }

        const userUpdateEmail = await userRepository.findByEmail(email);

        if(userUpdateEmail && userUpdateEmail.id != user_id) {
            throw new AppError('There is already a user with this email');
        }

        if (password && !old_password) {
            throw new AppError('Old password is required');
        }

        if (password && old_password) {

            const checkOldPassowrd = await compare(old_password, user.password);

            if (!checkOldPassowrd) {
                throw new AppError('Ol password does not match');
            }

            user.password = await hash(password, 8);

        }

        user.name = name;
        user.email = email;

        await userRepository.save(user);

        return user;

    }

}

export default UpdateProfileService;