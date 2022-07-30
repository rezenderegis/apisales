import { getCustomRepository } from "typeorm";
import Employee from "../typeorm/entities/Employee";
import EmployeeRepository from "../typeorm/repositories/EmployeeRepository";



interface IPaginateEmployee {
    from: number;
    to: number;
    per_page: number;
    total: number;
    current_page: number;
    prev_page: number | null;
    next_page: number | null;
    data: Employee[]
}

class ListCustomerService {


    public async execute(): Promise<IPaginateEmployee> {

        const employeeRepository = getCustomRepository(EmployeeRepository);

        const employees = await employeeRepository.createQueryBuilder().paginate();

        return employees as IPaginateEmployee;

    }



}