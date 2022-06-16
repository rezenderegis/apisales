import { getCustomRepository } from "typeorm";
import Customers from "../typeorm/entities/Customers";
import { CustomersRepository } from "../typeorm/repositories/CustomersRepository";

//This is default by the TYPEORM-PAGINATION
interface IPaginateCustomer {
    from: number;
    to: number;
    per_page: number;
    total: number;
    current_page: number;
    prev_page: number | null;
    next_page: number | null;
    data: Customers[]
}

class ListCustomerService {

    public async execute (): Promise<IPaginateCustomer> {

        const customerRepository = getCustomRepository(CustomersRepository);

        //const customers = customerRepository.find();
        const customers = await customerRepository.createQueryBuilder().paginate();

        return customers as IPaginateCustomer;


    }



}

export default ListCustomerService;