import { EntityRepository, Repository } from "typeorm";
import { Supplier } from "../entities/Supplier";

@EntityRepository(Supplier)
export class SupplierRepository extends Repository<Supplier> {

    public async findByName (name: string): Promise<Supplier | undefined> {

        const supplier = this.findOne({
            where: {
                name,
            }
        });

            return supplier;
    }





    
}