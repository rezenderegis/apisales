import { Request, Response } from 'express';
import CreateOrderService from '../services/CreateOrderService';
import ShowOrderService from '../services/ShowOrderService';

export default class OrdersControler {

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        
        const showOrderService = new ShowOrderService();
        
        const order = await showOrderService.execute({id});

        return response.json(order);

    }

    public async create (request: Request, response: Response): Promise<Response> {

        const {customer_id, products} = request.body;
        
        const createOrder = new CreateOrderService();
        const order = await createOrder.execute({
            customer_id, products,
        });
       
        return response.json(order);
    }


}