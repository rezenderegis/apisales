import {container} from 'tsyringe';
import { IcustomersRepository } from '@modules/customers/domain/repositories/ICustomersRepository';
import { CustomersRepository } from '@modules/customers/infra/http/typeorm/repositories/CustomersRepository';

container.registerSingleton<IcustomersRepository>('CustomersRepository', CustomersRepository);

