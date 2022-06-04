import { getCustomRepository } from "typeorm";
import Customers from "../typeorm/entities/Customers";
import { CustomersRepository } from "../typeorm/repositories/CustomersRepository";

class ListCustomerService {

    public async execute (): Promise<Customers[]> {

        const customerRepository = getCustomRepository(CustomersRepository);

        const customers = customerRepository.find();

        return customers;


    }



}

export default ListCustomerService;