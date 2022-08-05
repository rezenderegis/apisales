import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { SupplierRepository } from "../typeorm/repositories/SupplierRepository";

interface IRequest {
    id: string;
}
export class DeleteSupplierservice {

    public async execute ({id}: IRequest): Promise<void> {

        const supplierRepository = getCustomRepository(SupplierRepository);

        const supplierExist = await supplierRepository.findOne(id);

        if (!supplierExist) {
            throw new AppError("There is no Supplier with this ID");
        }

        supplierRepository.delete(id);

    }


}