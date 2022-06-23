import CreateCustomerService from '@modules/customers/services/CreateCustomerService';
import { getCustomRepository } from 'typeorm';
import 'reflect-metadata';
//import { FakeCustomersRepository } from '@modules/customers/typeorm/repositories/FakeCustomersRepository';
import { FakeCustomersRepository } from '@modules/customers/typeorm/repositories/FakeCustomersRepository';
import Customers from '../typeorm/entities/Customers';
import { CustomersRepository } from '../typeorm/repositories/CustomersRepository';
describe('Create Customer', () => {

    it('Should be able to create a new customer', async () => {
             
        const customerRepository = new FakeCustomersRepository();

        const customer = new Customers ();
            customer.name = 'Fabricio';

            customer.email = 'fabricio@gmail.com';
     
        customerRepository.createCustomer(customer);

        expect(customer).toHaveProperty('email');
    });


    it('Create a customer on the database', async () => {


        const name = 'fabricio';
        const email = 'fabricio1@gmail.com';
        const gender = 'M';
        const security_number = '3333';
        const person_type = 'M';

        const createCustomer = new CreateCustomerService();

        const customer = await createCustomer.execute({
            name, email, gender, security_number, person_type

        });

        expect(customer).toBeNull();



    });


    it('Create customer on the database 2', async () => {

        const name = 'fabricio';
        const email = 'fabricio1@gmail.com';
        const gender = 'M';
        const security_number = '3333';
        const person_type = 'M';

        const createCustomer = new CreateCustomerService();

        const customer = await createCustomer.execute({
            name, email, gender, security_number, person_type

        });

        expect(customer).toBeNull();



    });


});