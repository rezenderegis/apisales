import RedisCache from "@shared/cache/RedisCache";
import AppError from "@shared/errors/AppError";
import { getCustomRepository, getRepository } from "typeorm";
import { ProductRepository } from "../infra/http/typeorm/repositories/ProductsRepository";

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
        const redisCache = new RedisCache();

        await redisCache.invalidate('api-sales-LIST_PRODUCT', '');


        await productRepository.remove(product);

        
    }


}
export default DeleteProductService;