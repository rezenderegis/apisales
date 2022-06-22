import { EntityRepository, Repository,getRepository } from "typeorm";
import Customers from "@modules/customers/infra/http/typeorm/entities/Customers";
import { IcustomersRepository } from "@modules/customers/domain/repositories/ICustomersRepository";
import { ICustomer } from "@modules/customers/domain/models/ICustomer";


export class CustomersRepository implements IcustomersRepository{

    private ormRepository: Repository<Customers>;

    constructor() {
        this.ormRepository = getRepository(Customers);
    }

    public async create({name, email, gender, security_number,person_type}: ICustomer): Promise<Customers> {
        const customer = this.ormRepository.create({name, email,gender,security_number,person_type});
        await this.ormRepository.save(customer);
        return customer;
    }

    public async save(customer: Customers): Promise<Customers> {
        await this.ormRepository.save(customer);
        return customer;
    }

    public async findByName(name: string): Promise<Customers | undefined> {
        const customer = this.ormRepository.findOne({
            where: {
                name,
            }
        });

        return customer;
    }


    public async findById (id: string): Promise<Customers | undefined> {
       
        const customer = await this.ormRepository.findOne({
          where : {
              id,
          },
        }) ; 

        return customer;
      }

      public async findByEmail (email: string): Promise<Customers | undefined> {

          const customer = await this.ormRepository.findOne({
              where : {
                  email,
              }
          });

          return customer
      }

}