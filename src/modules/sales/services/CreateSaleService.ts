import { getCustomRepository } from "typeorm";
import Sales from "../infra/http/typeorm/entities/Sales";
import SalesRepository from "../infra/http/typeorm/repositories/SalesRepository";

interface IRequest {
    sales_date: Date,
    id_customer: string,
    description: string,
    status: string
}
class CreateSaleService {

    public async execute ({sales_date, id_customer, description,status}: IRequest): Promise<Sales> {

        const salesRepository = getCustomRepository(SalesRepository);

        const sales = salesRepository.create ({
        sales_date,
        id_customer,
        description,
        status
        });

        const sale = await salesRepository.save(sales);

        return sale;
    }



}

export default CreateSaleService;