import DeleteProductService from "@modules/products/services/DeleteProductService";
import { Request, Response } from "express";
import CreateCustomerService from "../services/CreateCustomerService";
import DeleteCustomerService from "../services/DeleteCustomerSerivce";
import ListCustomerService from "../services/ListCustomerService";
import ShowCustomerService from "../services/ShowCustomerService";
import UpdateCustomerService from "../services/UpdateCustomerService";

export default class CustomerController {


    public async index (request: Request, response: Response):Promise<Response> {

     const  listCustomers = new ListCustomerService();

    const customers = await listCustomers.execute();
    
    return response.json(customers);

    }

    public async create(request: Request, response: Response): Promise<Response> {
        console.log('Aqui');

        const {name, gender, security_number, person_type} = request.body;

        const createCustomer = new CreateCustomerService();

        const customer = await createCustomer.execute({
            name, gender, security_number, person_type

        });

        return response.json(customer);
    }

    public async update (request: Request, response: Response): Promise<Response> {
        
        const {name, gender, security_number, person_type} = request.body;
        
        const {id} = request.params;

        const updateCustomer = new UpdateCustomerService;

        const customer = await updateCustomer.execute({
            id,name, gender, security_number, person_type
        });

        return response.json(customer);
    }

    public async delete (request: Request, response: Response): Promise<Response> {

        const {id} = request.params;

        const deleteCustomer = new DeleteCustomerService;

     await deleteCustomer.execute({id});

        return response.json([]);
    }

    public async show (request: Request, response: Response): Promise<Response> {

        const {id} = request.params;
        
        const showCustomerService = new ShowCustomerService;

        const customer = await showCustomerService.execute({id});

        return response.json(customer);

    }

}