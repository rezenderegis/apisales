import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('employee')
class Employee {

    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column()
    name: string;

}

export default Employee;