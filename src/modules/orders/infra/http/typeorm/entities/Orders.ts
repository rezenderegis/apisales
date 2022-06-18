import Customers from "@modules/customers/infra/http/typeorm/entities/Customers";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import OrdersProducts from "@modules/orders/infra/http/typeorm/entities/OrdersProducts";

@Entity('orders')
class Orders {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    //A customer has many orders.
    @ManyToOne(() => Customers)
    @JoinColumn({name: 'customer_id'}) 
    customer: Customers;

    @OneToMany(() => OrdersProducts, order_products => order_products.order, {
        cascade: true,
    })
    order_products: OrdersProducts[];
   
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Orders;