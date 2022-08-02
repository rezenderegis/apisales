import AppError from "@shared/errors/AppError";
import { custom } from "joi";
import { getCustomRepository, SimpleConsoleLogger } from "typeorm";
import Employee from "../typeorm/entities/Employee";
import EmployeeRepository from "../typeorm/repositories/EmployeeRepository";

interface IRequest {
    id: string;
}
export default class ShowEmployeeService {

    public async execute ({id}: IRequest): Promise<Employee> {

        const employeeRepository = getCustomRepository(EmployeeRepository);

        const employee = await employeeRepository.findOne(id);
        console.log(employee);
        if (!employee) {
            throw new AppError('Customer not found');
        }

        return employee;
    }


}