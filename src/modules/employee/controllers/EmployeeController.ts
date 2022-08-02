import DeleteCustomerService from "@modules/customers/services/DeleteCustomerSerivce";
import ShowCustomerService from "@modules/customers/services/ShowCustomerService";
import { Request, Response } from "express";
import CreateEmployeeService from "../services/CreateEmployeeService";
import { DeleteEmployeeService } from "../services/DeleteEmployeeService";
import ListEmployeeService from "../services/ListEmployeeService";
import ShowEmployeeService from "../services/ShowEmployeeService";
import UpdateEmployeeService from "../services/UpdateEmloyeeService";
import Employee from "../typeorm/entities/Employee";

export default class EmployeeController {


    public async index (request: Request, response: Response): Promise<Response> {

        const listEmpoyees = new ListEmployeeService();

        const employees = await listEmpoyees.execute();

        return response.json(employees);

    }

    public async create (request: Request, response: Response): Promise<Response> {

        const {name} = request.body;

        const createEmployee = new CreateEmployeeService();

        const employee = await createEmployee.execute({
            name,
        });

        return response.json(employee);

    }

    public async update (request: Request, response: Response): Promise<Response> {
        
        const {name} = request.body;

        const {id} = request.params;

        const updateEmployee = new UpdateEmployeeService;

        const employee = await updateEmployee.execute({
            id, name
        });

        return response.json(employee);

    }

    public async delete (request: Request, response: Response): Promise<Response> {

        const {id} = request.params;

        const deleteEmployeeCustomerService = new DeleteEmployeeService;

        await deleteEmployeeCustomerService.execute({id});

        return response.json([]);

    }

    public async show(request: Request, response: Response): Promise<Response> {

        const {id} = request.params;
        
        const showEmployeeService = new ShowEmployeeService;

        const employee = await showEmployeeService.execute({id})

        return response.json(employee);
    }


}