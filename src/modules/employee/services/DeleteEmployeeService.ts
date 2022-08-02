import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Employee from "../typeorm/entities/Employee";
import EmployeeRepository from "../typeorm/repositories/EmployeeRepository";

interface IRequest {
    id: string;
    name: string;
}

export class DeleteEmployeeService {

    public async execute ({id}: IRequest): Promise<void> {

        const employeeRepository = getCustomRepository(EmployeeRepository);

        const employee = await employeeRepository.findOne(id);

        if (!employee) {
            throw new AppError('There is no employee with this id');

        }


        await employeeRepository.remove(employee);

    }

}