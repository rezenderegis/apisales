import { getCustomRepository } from "typeorm";
import User from "../infra/http/typeorm/entities/Users";
import UsersRepository from "../infra/http/typeorm/repositories/UserRepository";

class ListUserService {

    public async execute (): Promise<User[]> {

        const userRepository = getCustomRepository(UsersRepository);

        const users = userRepository.find();

        return users;

    }

}

export default ListUserService;