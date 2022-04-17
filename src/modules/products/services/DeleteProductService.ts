import AppError from "@shared/errors/AppError";
import { getCustomRepository, getRepository } from "typeorm";
import { ProductRepository } from "../typeorm/repositories/ProductsRepository";

interface IRequest {
    id: String;
}

class DeleteProductService {

    public async execute ({id}: IRequest): Promise<void> {

        const productRepository = getCustomRepository(ProductRepository);

        const product = await productRepository.findOne(id);

        if (!product) {
            throw new AppError('Product not found');
        }

        await productRepository.remove(product);

        
    }


}
export default DeleteProductService;