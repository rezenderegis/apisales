import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sales')
class Sales {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    sales_date: Date; 
    
    @Column()
    id_customer: string;
    
    @Column()
    description: string;
    
    @Column()
    status: string;


}

export default Sales;