import AppError from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import User from "../infra/http/typeorm/entities/Users";
import UsersRepository from "../infra/http/typeorm/repositories/UserRepository";


interface IRequest {
    name: string;
    email: string;
    password: string;

}

class CreateUserService {


    public async execute({name, email, password}: IRequest): Promise<User | undefined> {

        const userRepository = getCustomRepository(UsersRepository);
        const userExists = await userRepository.findByEmail(email);
        if (userExists) {

            throw new AppError('There is already one user with this email.');
        }

        const hashPassword = await hash(password, 8);


        const user = userRepository.create ({
            name,
            email,
            password: hashPassword,
            
            
        });
        await userRepository.save(user);
        

        return user;
    }

  


}

export default CreateUserService;