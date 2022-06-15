import Customers from "@modules/customers/typeorm/entities/Customers";
import Product from "@modules/products/typeorm/entities/Products";
import { CreateOrders1655177121745 } from "@shared/typeorm/migrations/1655177121745-CreateOrders";
import {EntityRepository, Repository} from "typeorm";
import Order from "../entities/order";

interface IProduct {
    product_id: string;
    price: number;
    quantity: number;
}


interface IRequest {
    customer: Customers;
    products: IProduct[];
}


@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
  
    public async findById(id: string):Promise<Order | undefined> {
        const order = this.findOne(id, {
            relations: ['order_products', 'customer']
        });
        return order;
    } 

    public async createOrder ({customer, products}: IRequest): Promise<Order> {
        console.log('Teste');
       // console.log(products);
        const order = this.create ({
            customer, 
            order_products: products,
        });

        await this.save(order);

        return order;
    }

}


