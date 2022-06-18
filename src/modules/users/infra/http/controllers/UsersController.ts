import CreateProductService from "@modules/products/services/CreateProductService";
import { Request, Response } from "express";
import CreateUserService from "../../../services/CreateUserService";
import ListUserService from "../../../services/ListUserService";
import { instanceToInstance } from 'class-transformer';

export default class UsersController {
    

    public async index(request: Request, response: Response): Promise<Response> {

        const listUsers = new ListUserService();

        const users = await listUsers.execute();
        
        return response.json(instanceToInstance(users));

    }

    public async create(request: Request, response: Response): Promise<Response> {

        const { name, email, password, avatar} = request.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute({

            name, 
            email, 
            password

        });
        
        return response.json(instanceToInstance(user));
        
    }


}