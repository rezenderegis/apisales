import AppError from "@shared/errors/AppError";
import { Tracing } from "trace_events"
import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UserRepository";


interface IRequest {
    name: string;
    email: string;
    password: string;
    avatar: string;

}

class CreateUserService {


    public async execute({name, email, password, avatar}: IRequest): Promise<User | undefined> {
    
        const userRepository = getCustomRepository(UsersRepository);
        const userExists = await userRepository.findByEmail(email);
        if (userExists) {

            throw new AppError('There is already one user with this email.');
        }

        const user = userRepository.create ({
            name,
            email,
            password,
            avatar,
        });

        await userRepository.save(user);
        return user;
    }

  


}

export default CreateUserService;