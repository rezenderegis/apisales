import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Employee from "../typeorm/entities/Employee";
import EmployeeRepository from "../typeorm/repositories/EmployeeRepository";

interface IRequest {
    id: string;
    name: string;
}

class UpdateEmployeeService {

    public async execute ({id, name}: IRequest): Promise<Employee> {

        const employeeRepository = getCustomRepository(EmployeeRepository);

        const employee = await employeeRepository.findOne(id);

        if (!employee) {
            throw new AppError('There is no employee with this id');

        }

        employee.name = name;

        await employeeRepository.save(employee);

        return employee;

    }

}