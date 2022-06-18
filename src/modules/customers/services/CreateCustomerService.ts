import AppError from "@shared/errors/AppError";
import { ICreateCustomer } from "../domain/models/ICreateCustomer";
import { ICustomer } from "../domain/models/ICustomer";
import { IcustomersRepository } from "../domain/repositories/ICustomersRepository";
import Customers from "../infra/http/typeorm/entities/Customers";


class CreateCustomerService {

    //We'll stop to instatiate repository, the controller will send 
    constructor (private customerRepository: IcustomersRepository) {

    }

    public async execute ({name, gender, security_number,email}: ICreateCustomer): Promise<ICustomer> {
        const customerExists = await this.customerRepository.findByName(name);
        //TODO: Change to check security_number
        if (customerExists) {
            throw new AppError('There is already one customer with this name');
        }

        const customer = await this.customerRepository.create({
            email,
            name,
            gender,
            security_number,
        });

        return customer;
    }

}

export default CreateCustomerService;