import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';

/** Product to request and response. Express instance situated on server.ts */
export default class ProducsController {


    public async create (request: Request, response: Response): Promise<Response> {
        const {name,  price, quantity} = request.body;
        const createProduct = new CreateProductService();
        const product = await createProduct.execute({
            name,
            price,
            quantity,
        });
        return response.json(product);
    }

}