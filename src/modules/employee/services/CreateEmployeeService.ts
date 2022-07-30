import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Employee from "../typeorm/entities/Employee";
import EmployeeRepository from "../typeorm/repositories/EmployeeRepository";

interface IRequest {
    name: string;
}

export default class CreateEmployeeService {

    public async execute ({name}: IRequest): Promise<Employee> {

        const employeeRepository = getCustomRepository(EmployeeRepository);

        const employeeExist = await employeeRepository.findByName(name);

        if (employeeExist) {
            throw new AppError('There is already one product with this name');

        }

        const employee = employeeRepository.create({
            name,
        });

        await employeeRepository.save(employee);

        return employee;

    }
    

}