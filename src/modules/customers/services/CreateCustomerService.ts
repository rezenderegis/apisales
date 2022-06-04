import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Customers from "../typeorm/entities/Customers";
import { CustomersRepository } from "../typeorm/repositories/CustomersRepository";

interface IRequest {
    name: string;
    gender: string;
    security_number: number;
    person_type: string;
    
}
class CreateCustomerService {

    public async execute ({name, gender, security_number, person_type}: IRequest): Promise<Customers> {
        const customerRepository = getCustomRepository(CustomersRepository);
        const customerExists = await customerRepository.findByName(name);

        //TODO: Change to check security_number
        if (customerExists) {
            throw new AppError('There is already one customer with this name');
        }

        const customer = customerRepository.create({
            name,
            gender,
            security_number,
            person_type,
        });

        await customerRepository.save(customer);
        return customer;
    }

}

export default CreateCustomerService;