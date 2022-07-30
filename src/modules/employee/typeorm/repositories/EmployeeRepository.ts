import { EntityRepository, Repository } from "typeorm";
import Employee from "../entities/Employee";

@EntityRepository(Employee)
class EmployeeRepository extends Repository<Employee> {

    public async findByName (name: string): Promise<Employee | undefined> {

        const employee = await this.findOne({
            where: {
                name,
            }
        });

        return employee;
    }


}

export default EmployeeRepository;