import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { BrandsRepository } from "../typeorm/repositories/BrandsRepository";

interface IRequest {
    id: String;
}

class DeleteBrandsService {

    public async execute ({id}: IRequest): Promise<void> {

        const brandsRepository = getCustomRepository(BrandsRepository);

        const brand = brandsRepository.findOne(id);

        if (!brand) {
            throw new AppError("Brand not found");
        }

        await brandsRepository.remove(brand);



    }

}

export default DeleteBrandsService;