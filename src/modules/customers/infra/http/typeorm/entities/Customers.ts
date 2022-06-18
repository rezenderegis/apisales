import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('customers')
class Customers {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name: string;

    @Column()
    gender: string;

    @Column()
    email: string;

    @Column()
    security_number: string;

    @Column()
    person_type: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Customers;