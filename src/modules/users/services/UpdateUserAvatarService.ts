import AppError from "@shared/errors/AppError";

import { getCustomRepository } from "typeorm";
import User from "../infra/http/typeorm/entities/Users";
import UsersRepository from "../infra/http/typeorm/repositories/UserRepository";
import path from 'path';
import uploadConfig from '@config/upload';
import fs from 'fs';

interface IRequest {
    user_id: string;
    avatarFilename: string;

}

class UpdateUserAvatarService {


    public async execute({user_id, avatarFilename}: IRequest): Promise<User | undefined> {

        const userRepository = getCustomRepository(UsersRepository);
        
        const user = await userRepository.findById(user_id);
        
        if (!user) {

            throw new AppError('User not found.');

        }

        if (user.avatar) {
            const userAvatarFilePath = path.join(uploadConfig.diretory, user.avatar);
            
            //Check file exists 
            const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

            //Removing files before update
            if (userAvatarFileExists) {
                //unlink remove file
                await fs.promises.unlink(userAvatarFilePath)

            }
        }
        user.avatar = avatarFilename;

        await userRepository.save(user);

        return user;

    }

  


}

export default UpdateUserAvatarService;