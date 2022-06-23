import { EntityRepository, Repository } from "typeorm";
import Customers from "@modules/customers/typeorm/entities/Customers";
//import {v4 as uuidv4} from 'uuid';


interface IClass {
    name: string;
    email: string;
}

@EntityRepository(Customers)
export class FakeCustomersRepository extends Repository<Customers> {

  //  private customers: Customers[] = [];

    public async createCustomer ({name, email}:IClass): Promise<Customers> {
        const customer = new Customers();

        customer.id = 'DDDDDDDDFFFFFDDDDDAAAASSS';
        customer.name = name;
        customer.email = email;
        return customer;

    }

    /*
    public async findByName(name: string): Promise<Customers | undefined> {
        const customer = this.findOne({
            where: {
                name,
            }
        });

        return customer;
    }


    public async findById (id: string): Promise<Customers | undefined> {
       
        const customer = await this.findOne({
          where : {
              id,
          },
        }) ; 

        return customer;
      }

      public async findByEmail (email: string): Promise<Customers | undefined> {

          const customer = await this.findOne({
              where : {
                  email,
              }
          });

          return customer
      }
*/
}