import Customers from "@modules/customers/typeorm/entities/Customers";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import OrdersProducts from "./OrdersProducts";

@Entity('order')
class Order {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    security_number: string;

    @Column()
    person_type: string;

    //A customer has many orders.
    @ManyToOne(() => Customers)
    @JoinColumn({name: 'customer_id'}) 
    customer: Customers;

    @OneToMany(() => OrdersProducts, order_products => order_products.order)
    order_products: OrdersProducts[];
   


    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Order;