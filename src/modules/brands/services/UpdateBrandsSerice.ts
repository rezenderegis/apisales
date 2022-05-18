import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Brands from "../typeorm/entities/Brands";
import { BrandsRepository } from "../typeorm/repositories/BrandsRepository";


interface IRequest {
    id: string, 
    name: string
}

class UpdateBrandsService {

    public async execute ({id, name}: IRequest): Promise<Brands> {

        const brandsRepository = getCustomRepository(BrandsRepository);

        const brand = await brandsRepository.findOne(id);

        if (!brand) {
            throw new AppError('Brand not found');
        }

        const brandExists = await brandsRepository.findByName(name);

        if (brandExists && name != brand.name) {
            throw new AppError('There is already one brand with this name');
            
        }

        brand.name = name;
        
        await brandsRepository.save(brand);

        return brand;


    }


}

export default UpdateBrandsService;