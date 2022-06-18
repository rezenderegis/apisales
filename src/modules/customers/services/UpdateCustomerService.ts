import UsersRepository from "@modules/users/infra/http/typeorm/repositories/UserRepository";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Customers from "../infra/http/typeorm/entities/Customers";
import { CustomersRepository } from "../infra/http/typeorm/repositories/CustomersRepository";

interface IRequest {
    id: string;
    name: string;
    email: string;
    gender: string;
    security_number: string;
    person_type: string;
}

class UpdateCustomerService {

    public async execute({id,name,email,gender,security_number,person_type}:IRequest): Promise<Customers> {

        const customerRespository = getCustomRepository(CustomersRepository);

        const customer = await customerRespository.findOne(id);
    
        if (!customer) {
            throw new AppError('Customer not found.');
        }

        const customerUpdateEmail = await customerRespository.findByEmail(email);

        if (customerUpdateEmail && customerUpdateEmail.id != id) {
            throw new AppError('There is already one customer with this email');
        }

        customer.name = name;
        customer.email = email;
        customer.gender = gender;
        customer.security_number = security_number;
        customer.person_type = person_type;

        await customerRespository.save(customer);

        return customer;
    }

}
export default UpdateCustomerService;