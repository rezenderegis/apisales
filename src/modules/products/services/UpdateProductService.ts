import RedisCache from "@shared/cache/RedisCache";
import AppError from "@shared/errors/AppError";
import { getCustomRepository, getRepository } from "typeorm";
import Product from "@modules/products/typeorm/entities/Products";
import { ProductRepository } from "@modules/products/typeorm/repositories/ProductsRepository";

interface IRequest {
    id: String;
    name: string;
    price: number;
    quantity: number
}

class UpdateProductService {

    public async execute ({id, name, price, quantity}: IRequest): Promise<Product> {

        const productsRepository = getCustomRepository(ProductRepository);

        const product = await productsRepository.findOne(id);

        if (!product) {
            throw new AppError('Product not found');
        }

        const productExists = await productsRepository.findByName(name);

        if (productExists && name != product.name) {
            throw new AppError('There is already one product with this name');
        }

        const redisCache = new RedisCache();

        await redisCache.invalidate('api-sales-LIST_PRODUCT', '');


        product.name = name;
        product.price = price;
        product.quantity = quantity;
        
        await productsRepository.save(product);

        return product;
        
    }


}
export default UpdateProductService;