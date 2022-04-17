import AppError from "@shared/errors/AppError";
import { getCustomRepository, getRepository } from "typeorm";
import Product from "../typeorm/entities/Products";
import { ProductRepository } from "../typeorm/repositories/ProductsRepository";

interface IRequest {
    id: String;
}

class ShowProductService {

    public async execute ({id}: IRequest): Promise<Product> {

        const productsRepository = getCustomRepository(ProductRepository);

        const product = await productsRepository.findOne(id);

        if (!product) {
            throw new AppError('Product not found');
        }

        return product;
        
    }


}
export default ShowProductService;