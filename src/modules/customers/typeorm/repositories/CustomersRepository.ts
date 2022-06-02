import { EntityRepository, Repository } from "typeorm";
import Customers from "../entities/Customers";

@EntityRepository(Customers)
export class CustomersRepository extends Repository<Customers> {

    public async findByName(name: string): Promise<Customers | undefined> {
        const customer = this.findOne({
            where: {
                name,
            }
        });

        return customer;
    }

}