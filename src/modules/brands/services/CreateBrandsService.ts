import productsRouter from "@modules/products/routes/products.routes";
import AppError from "@shared/errors/AppError";
import { string } from "joi"
import { getCustomRepository } from "typeorm"
import Brands from "../typeorm/entities/Brands";
import { BrandsRepository } from "../typeorm/repositories/BrandsRepository";

//interface
interface IRequest {
    name: string;
}

class CreateBrandsService {



    public async execute({ name }: IRequest): Promise<Brands> {

        const brandsRepository = getCustomRepository(BrandsRepository);

        const brandsExists = await brandsRepository.findByName(name);

        if (brandsExists) {
            throw new AppError('There is already on brand with this name');
        }

        const brand = brandsRepository.create({
            name,
        });

        await brandsRepository.save(brand);

        return brand;

    }



}