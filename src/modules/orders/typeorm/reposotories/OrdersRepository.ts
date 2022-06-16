import Customers from "@modules/customers/typeorm/entities/Customers";
import {EntityRepository, Repository} from "typeorm";
import Orders from "@modules/orders/typeorm/entities/Orders";

interface IProduct {
    product_id: string;
    price: number;
    quantity: number;
}


interface IRequest {
    customer: Customers;
    products: IProduct[];
}


@EntityRepository(Orders)
class OrdersRepository extends Repository<Orders> {
  
    public async findById(id: string):Promise<Orders | undefined> {
        const order = this.findOne(id, {
            relations: ['order_products', 'customer'],
        });
        return order;
    } 

    public async createOrder ({customer, products}: IRequest): Promise<Orders> {
        const order = this.create ({
            customer, 
            order_products: products,
        });

        await this.save(order);

        return order;
    }

}

export default OrdersRepository;