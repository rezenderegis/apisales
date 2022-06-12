import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import UsersController from "../controllers/UsersController";
import User from "../typeorm/entities/Users";
import UsersRepository from "../typeorm/repositories/UserRepository";

interface IRequest {
    user_id: string;
}
class ShowProfileService {

    public async execute ({user_id}:IRequest): Promise<User> {

        const userRepository = getCustomRepository(UsersRepository);

        const user = await userRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found');
        }

        return user;

    }

}

export default ShowProfileService;