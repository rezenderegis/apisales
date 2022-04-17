import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Products";
import { ProductRepository } from "../typeorm/repositories/ProductsRepository";

interface IRequest {
    name: string;
    price: number;
    quantity: number;
}

class CreateProductService {

    public async execute({name, price, quantity}: IRequest ): Promise<Product> {
        console.log('Salvando############################3');

        const productsRepository = getCustomRepository(ProductRepository);
       // const productExists = await productsRepository.findByName(name);
        //if (productExists) {
         //   throw new AppError('There is already one product with this name');
        //}
        console.log('Salvando############################4');

        const product = productsRepository.create({
            name,
            price,
            quantity,
        });
        console.log('Salvando############################5');
        console.log(product);


        await productsRepository.save(product);
        return product;
    }

}

export default CreateProductService;