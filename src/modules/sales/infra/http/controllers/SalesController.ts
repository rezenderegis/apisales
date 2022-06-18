import { Request, Response } from "express";
import CreateSaleService from "../../../services/CreateSaleService";
import ListSalesService from "../../../services/ListSalesService";

class SallesController {


    public async list(request: Request, response: Response): Promise<Response> {

        const salesService = new ListSalesService;

        const sales = await salesService.execute();

        return response.json(sales);


    }

    public async create (request: Request, response: Response): Promise<Response> {

        const { sales_date, id_customer, description,status} = request.body;
        
        const salesService = new CreateSaleService;

        const sale = await salesService.execute({
            sales_date, id_customer, description,status
        });
        return response.json(sale);
    }

}

export default SallesController;