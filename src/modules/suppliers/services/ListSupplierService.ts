import { getCustomRepository } from "typeorm";
import { Supplier } from "../typeorm/entities/Supplier";
import { SupplierRepository } from "../typeorm/repositories/SupplierRepository";


export class ListSupplierService {

    public async execute () {

        const supplierRepository = getCustomRepository(SupplierRepository);

        const suppliers = supplierRepository.find();

        return suppliers;



    }


}