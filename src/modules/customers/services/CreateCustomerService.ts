import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Customers from "../typeorm/entities/Customers";
import { CustomersRepository } from "../typeorm/repositories/CustomersRepository";

interface IRequest {
    name: string;
    email: string;
    gender: string;
    security_number: string;
    person_type: string;
    
}
class CreateCustomerService {

    public async execute ({name, gender, security_number, person_type,email}: IRequest): Promise<Customers> {
        const customerRepository = getCustomRepository(CustomersRepository);
        const customerExists = await customerRepository.findByName(name);
        //TODO: Change to check security_number
        if (customerExists) {
            throw new AppError('There is already one customer with this name');
        }

        const customer = customerRepository.create({
            email,
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