import DeleteProductService from "@modules/products/services/DeleteProductService";
import { Request, Response } from "express";
import { container,injectable } from "tsyringe";
import CreateCustomerService from "../../../services/CreateCustomerService";
import DeleteCustomerService from "../../../services/DeleteCustomerSerivce";
import ListCustomerService from "../../../services/ListCustomerService";
import ShowCustomerService from "../../../services/ShowCustomerService";
import UpdateCustomerService from "../../../services/UpdateCustomerService";

export default class CustomerController {


    public async index (request: Request, response: Response):Promise<Response> {

     const  listCustomers = new ListCustomerService();

    const customers = await listCustomers.execute();
    
    return response.json(customers);

    }

    public async create(request: Request, response: Response): Promise<Response> {

        const {name, email, gender, security_number,person_type} = request.body;

        /*Dependency Inversion - In this method we instanciate the repository on controller and pass to service
        The problem of this method is tha we need to instanciate the class CustomerRepository all the time. 
        The way to improve it is with lib  tsyringe tha make dependency injetion.
       
        With injection is not necessary to instanciate
        const customersRepository = new CustomersRepository();
        */
        
        const createCustomer = container.resolve(CreateCustomerService); 

        const customer = await createCustomer.execute({
            name, email, gender, security_number,person_type

        });

        return response.json(customer);
    }

    public async update (request: Request, response: Response): Promise<Response> {
        
        const {name,email, gender, security_number, person_type} = request.body;
        
        const {id} = request.params;

        const updateCustomer = new UpdateCustomerService;

        const customer = await updateCustomer.execute({
            id,name, email, gender, security_number, person_type
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