import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Brands from "../typeorm/entities/Brands";
import { BrandsRepository } from "../typeorm/repositories/BrandsRepository";

interface IRequest {
    id: String;
}

class ShowBrandsSerive {

    public async execute ({id}: IRequest): Promise<Brands> {

        const brandsRepository = getCustomRepository(BrandsRepository);

        const brand = await brandsRepository.findOne(id);

        if (!brand) {

            throw new AppError('Brand not found');

        }

        return brand;


    }


}

export default ShowBrandsSerive;