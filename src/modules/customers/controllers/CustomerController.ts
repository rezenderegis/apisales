import { Request, Response } from "express";
import CreateCustomerService from "../services/CreateCustomerService";
import ListCustomerService from "../services/ListCustomerService";

export default class CustomerController {


    public async index (request: Request, response: Response):Promise<Response> {

     const  listCustomers = new ListCustomerService();

    const customers = await listCustomers.execute();
    
    return response.json(customers);
    
    }

    public async create(request: Request, response: Response): Promise<Response> {

        const {name, gender, security_number, person_type} = request.body;

        const createCustomer = new CreateCustomerService();

        const customer = await createCustomer.execute({
            name, gender, security_number, person_type

        });

        return response.json(customer);
    }

    

}