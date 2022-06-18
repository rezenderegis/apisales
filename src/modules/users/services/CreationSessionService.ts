import AppError from "@shared/errors/AppError";
import { compare, hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import User from "../infra/http/typeorm/entities/Users";
import UsersRepository from "../infra/http/typeorm/repositories/UserRepository";
import {sign} from 'jsonwebtoken';

//We created this file do use global application
import authConfig from '@config/auth';
interface IRequest {
    email: string;
    password: string;

}

interface IResponse {
    user: User;
    token: string;
}
class CreateSessionsService {


    public async execute({ email, password }: IRequest): Promise<IResponse> {

        const userRepository = getCustomRepository(UsersRepository);
        const user = await userRepository.findByEmail(email);
        if (!user) {

            throw new AppError('Incorrect emaill/password combination.', 401);
        }

        const passwordConfirmation = await compare(password, user.password);

        if (!passwordConfirmation) {

            throw new AppError('Incorrect emaill/password combination.', 401);
        }

        //After pass this two steps, configure JWT. Include sign method

        /*Three parameters: 
        1. payload o send user (not use personal data),include 
        something like ID to use. Something to identificate user. 
        2. Hash - secrete use to create. Include every informatio or md5 hash
        */
        
        const token = sign({}, authConfig.jwt.secret, {
            subject: user.id,
            expiresIn: authConfig.jwt.expiresIn,
        });

        return {
            user, 
            token
        };
    }




}

export default CreateSessionsService;