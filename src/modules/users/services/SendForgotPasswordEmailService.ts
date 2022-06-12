import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import path from 'path';
import User from "../typeorm/entities/Users";
import UsersRepository from "../typeorm/repositories/UserRepository";
import UserTokensRepository from "../typeorm/repositories/UserTokensRepository";
import EtherealMail from '@config/mail/EtherealMail';

interface IRequest {
    email: string;
}
class SendForgotPasswordEmailService {


    public async execute ({email}: IRequest): Promise<void> {

        const userRepository = getCustomRepository(UsersRepository);

        const userTokenRepository = getCustomRepository(UserTokensRepository);

        const user = await userRepository.findByEmail(email);

        if (!user) {
            throw new AppError('User doesnt exists');
        }

        const token = await userTokenRepository.generate(user.id);

        const forgotPasswordTemplate = path.resolve(__dirname, '..', 'views', 'forgot_password.hbs');
        console.log(token.token);
        await EtherealMail.sendMail({
           to: {
               name: user.name,
               email: user.email,
           },
           subject: '[API Sales] Password forgot',
           templateData: {
               file: forgotPasswordTemplate,
               //Allo {{}} because of Handlebars Mail Template
               variables: {
                   name: user.name,
                   link: `http://localhost:3000/reset_password?token=${token.token}`,
               },
           },
       });
    }


}

export default SendForgotPasswordEmailService;