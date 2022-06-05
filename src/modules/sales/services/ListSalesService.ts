import { getCustomRepository } from "typeorm";
import Sales from "../typeorm/entities/Sales";
import SalesRepository from "../typeorm/repositories/SalesRepository";

class ListSalesService {

    public async execute(): Promise<Sales[]> {
        console.log('controller');
        const salesService = getCustomRepository(SalesRepository);

        const sales = await salesService.find();

        return sales;

    }


}

export default ListSalesService;