import { EntityRepository, Repository } from "typeorm";
import Brands from "../entities/Brands";

@EntityRepository(Brands)
export class BrandsRepository extends Repository<Brands> {

    public async findByName(name: string): Promise<Brands | undefined> {

        const brand = this.findOne({
            where: {
                name,
            },
        });
        return brand;
    }

}