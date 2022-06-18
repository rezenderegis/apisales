import Product from "@modules/products/infra/http/typeorm/entities/Products";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Orders from "@modules/orders/infra/http/typeorm/entities/Orders";

@Entity('orders_products')
class OrdersProducts {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    //A customer has many orders.
    @ManyToOne(() => Orders, orders => orders.order_products)
    @JoinColumn({name: 'order_id'}) 
    order: Orders;

    @ManyToOne(() => Product, product => product.order_products)
    @JoinColumn({name: 'product_id'}) 
    product: Product;

    @Column()
    order_id: string;

    @Column()
    product_id: string;
    
    @Column('decimal')
    price: number;

    @Column('int')
    quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default OrdersProducts;