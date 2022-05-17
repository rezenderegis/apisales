import { getCustomRepository } from "typeorm";
import Brands from "../typeorm/entities/Brands";
import { BrandsRepository } from "../typeorm/repositories/BrandsRepository";

class ListBrandsService {

    public async execute (): Promise<Brands[]> {
        
        const brandsRepository = getCustomRepository(BrandsRepository);

        const brands = brandsRepository.find();

        return brands;

    }
}

export default ListBrandsService;