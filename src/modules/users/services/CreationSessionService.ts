import AppError from "@shared/errors/AppError";
import { compare, hash } from "bcryptjs";
import { Tracing } from "trace_events"
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/Users";
import UsersRepository from "../typeorm/repositories/UserRepository";


interface IRequest {
    email: string;
    password: string;

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

        return user;
    }




}

export default CreateSessionsService;