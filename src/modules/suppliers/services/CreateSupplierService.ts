import AppError from "@shared/errors/AppError";
import { Tracing } from "trace_events";
import { getCustomRepository } from "typeorm";
import { Supplier } from "../typeorm/entities/Supplier";
import { SupplierRepository } from "../typeorm/repositories/SupplierRepository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateSupplierService {

    public async execute ({name, description}: IRequest): Promise<Supplier> {

        const supplierRepository = getCustomRepository(SupplierRepository);

        const supplierExist = await supplierRepository.findByName(name);

        if (supplierExist) {
            throw new AppError("There is already on supplier with this name");
        }

        const supplier = supplierRepository.create({
            name, description,
        });

        await supplierRepository.save(supplier);

        return supplier;

    }

}