import { getCustomRepository } from "typeorm";
import Product from "../infra/http/typeorm/entities/Products";
import { ProductRepository } from "../infra/http/typeorm/repositories/ProductsRepository";
import RedisCache from "@shared/cache/RedisCache";

class ListProductService {

    public async execute (): Promise<Product[]> {

        const productsRepository = getCustomRepository(ProductRepository);

        //Instance
        const redisCache = new RedisCache();

        //Check if exist on redis 
        let products = await redisCache.recover<Product[]>(
            'api-sales-LIST_PRODUCT',
        );

        //If not exist, find in database and save on redis again
        if (!products) {
            products = await productsRepository.find();
            await redisCache.save( 'api-sales-LIST_PRODUCT', products);
        }

        return products;
        
    }


}
export default ListProductService;