import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { Supplier } from "../typeorm/entities/Supplier";
import { SupplierRepository } from "../typeorm/repositories/SupplierRepository";

interface IRequest {
    id: string;
}

export default class ShowSupplierService {

    public async execute ({id}: IRequest): Promise<Supplier | undefined> {
        console.log(id);
        const supplierRepository = getCustomRepository(SupplierRepository);

        const supplier = await supplierRepository.findOne(id);

        if (!supplier) {
            throw new AppError('There is no Supplier with this id');
        }

        return supplier;
    }


}