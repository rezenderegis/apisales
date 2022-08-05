import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { Supplier } from "../typeorm/entities/Supplier";
import { SupplierRepository } from "../typeorm/repositories/SupplierRepository";

interface IRequest {
    id: string;
    name: string;
    description: string;
}


export class UpdateSupplierService {

    public async execute ({id, name, description}: IRequest): Promise<Supplier> {

        const supplierRepository = getCustomRepository(SupplierRepository);

        const supplier = await supplierRepository.findOne(id);

        if (!supplier) {
            throw new AppError('There is already on brand with this name');

        }

        supplier.name = name;
        supplier.description = description;
        console.log(supplier);
        await supplierRepository.save(supplier);

        return supplier;

    }

}