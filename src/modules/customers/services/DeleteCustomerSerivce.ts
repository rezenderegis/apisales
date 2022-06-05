import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Customers from "../typeorm/entities/Customers";
import { CustomersRepository } from "../typeorm/repositories/CustomersRepository";

interface IRequest {
    id: string;
}

class DeleteCustomerService {

    public async execute ({id}: IRequest): Promise<void> {

        const customerRepository = getCustomRepository(CustomersRepository);

        const customer = await customerRepository.findOne(id);

        if (!customer) {
            throw new AppError('Customer not found');
        }
         await customerRepository.remove(customer)


    }


}

export default DeleteCustomerService;