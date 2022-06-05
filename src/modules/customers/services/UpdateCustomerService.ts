import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Customers from "../typeorm/entities/Customers";
import { CustomersRepository } from "../typeorm/repositories/CustomersRepository";

interface IRequest {
    id: string;
    name: string;
    gender: string;
    security_number: string;
    person_type: string;
}

class UpdateCustomerService {

    public async execute({id,name,gender,security_number,person_type}:IRequest): Promise<Customers> {

        const customerRespository = getCustomRepository(CustomersRepository);

        const customer = await customerRespository.findOne(id);
    
        if (!customer) {
            throw new AppError('Customer not found.');
        }

        customer.name = name;
        customer.gender = gender;
        customer.security_number = security_number;
        customer.person_type = person_type;

        await customerRespository.save(customer);

        return customer;
    }

}
export default UpdateCustomerService;