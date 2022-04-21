import AppError from "@shared/errors/AppError";
import { compare, hash } from "bcryptjs";
import { Tracing } from "trace_events"
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/Users";
import UsersRepository from "../typeorm/repositories/UserRepository";
import {sign} from 'jsonwebtoken';

interface IRequest {
    email: string;
    password: string;

}

interface IResponse {
    user: User;
    token: string;
}
class CreateSessionsService {


    public async execute({ email, password }: IRequest): Promise<User> {

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
        
        const token = sign({}, '7456fd7a4c7885ab2066c5fc3bb99872', {
            subject: user.id,
            expiresIn: '1d',
        });
        return {
            user, 
            token
        };
    }




}

export default CreateSessionsService;