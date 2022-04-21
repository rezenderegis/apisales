import { getCustomRepository } from "typeorm";
import UsersController from "../controllers/UsersController";
import User from "../typeorm/entities/Users";
import UsersRepository from "../typeorm/repositories/UserRepository";

class ListUserService {

    public async execute (): Promise<User[]> {

        const userRepository = getCustomRepository(UsersRepository);

        const users = userRepository.find();

        return users;

    }

}

export default ListUserService;