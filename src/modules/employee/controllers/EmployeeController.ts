import { Request } from "express";
import CreateEmployeeService from "../services/CreateEmployeeService";
import Employee from "../typeorm/entities/Employee";

export default class EmployeeController {

    public async create (request: Request, response: Response): Promise<Response> {

        const {name} = request.body;

        const createEmployee = new CreateEmployeeService();

        const employee = await createEmployee.execute({
            name,
        });

        return response.json(employee);


    }


}