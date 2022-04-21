import {Request, Response} from 'express';
import CreateSessionsService from '../services/CreationSessionService';

export default class SessionsController {

    public async create(request: Request, response: Response): Promise<Response> {

        const {email, password} = request.body;

        const createsession = new CreateSessionsService();

        const user = await createsession.execute({

            email,
            password,
        });

        /** If the user and password is correct, the controller 
         * will response the user. We'll need to implement now the 
         * token response with Json Web Token. 
         */
        return response.json(user);

    }

}