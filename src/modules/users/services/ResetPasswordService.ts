import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UserRepository";
import UserTokensRepository from "../typeorm/repositories/UserTokensRepository";
import {isAfter,addHours} from 'date-fns';
import {hash} from 'bcryptjs';

interface IRequest {
    token: string;
    password: string;
}

class ResetPasswordService {

    public async execute ({token, password}: IRequest): Promise<void> {

        const userRepository = getCustomRepository(UsersRepository);

        const tokenRepository = getCustomRepository(UserTokensRepository);

        const userToken = await tokenRepository.findByToken(token);

        if (!userToken) {
            throw new AppError('Token doent exist.');
        }

        const user = await userRepository.findById(userToken.user_id);


        if (!user) {
            throw new AppError('User dont exist.');
        }

        const tokenCreatedAt = userToken.created_at;

        const compareDate = addHours(tokenCreatedAt, 2);

        if (isAfter(Date.now(), compareDate)) {
            throw new AppError('Token expired.');
        }

        user.password = await hash(password,8);
        userRepository.save(user);

    }

}

export default ResetPasswordService;