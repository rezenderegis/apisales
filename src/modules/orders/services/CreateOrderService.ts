import { CustomersRepository } from "@modules/customers/typeorm/repositories/CustomersRepository";
import { ProductRepository } from "@modules/products/typeorm/repositories/ProductsRepository";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Orders from "@modules/orders/typeorm/entities/Orders";
import OrdersRepository from "@modules/orders/typeorm/reposotories/OrdersRepository";


interface IProduct {
    id: string;
    quantity: number;
}

interface IRequest {
    customer_id: string;
    products: IProduct[];
    
}

class CreateOrderService {

    public async execute({customer_id, products}: IRequest ): Promise<Orders> {
        const ordersRepository = getCustomRepository(OrdersRepository);

        const customerRepository = getCustomRepository(CustomersRepository);

        const productsRepository = getCustomRepository(ProductRepository);
       

        const customerExists = await customerRepository.findById(customer_id);

        if (!customerExists) {
           throw new AppError('Could not find any customer with this ID');
        }


        const existsProducts = await productsRepository.findAllByIds(products);

        if (!existsProducts.length) {
            throw new AppError('Could not find any produt with the give ids');
        }

        const existsProductsIds = existsProducts.map((product) => product.id);


        const checkInexistentProduct = products.filter(
            product => !existsProductsIds.includes(product.id)
        );

        if (checkInexistentProduct.length) {
            throw new AppError('Could not find product ${checkInexistentProduct[0]}');
        }

        const quantityAvailable = products.filter(
            product => existsProducts.filter(
                p => p.id == product.id
            )[0].quantity < product.quantity
        )

        if (quantityAvailable.length) {
            throw new AppError(`The quantity ${quantityAvailable[0].quantity} is not available for ${quantityAvailable[0].id}`);
        }

        const serializedProducts = products.map( product=> ({
            product_id: product.id,
            quantity: product.quantity,
            price: existsProducts.filter(p => p.id == product.id)[0].price,
        }));
        console.log("Aqui -->>>>>>>>>>>>>>");
        console.log(customerExists);
        console.log(serializedProducts);
        
        const order = await ordersRepository.createOrder({
            customer: customerExists,
            products: serializedProducts,
        });

        const {order_products} = order;

        const updatedProductQuantity = order_products.map(
            product => ({
                id: product.product_id,
                quantity: existsProducts.filter(p => p.id == product.product_id)[0].quantity - product.quantity,
            })
        );

        await productsRepository.save(updatedProductQuantity);

        return order;
    }

}

export default CreateOrderService;