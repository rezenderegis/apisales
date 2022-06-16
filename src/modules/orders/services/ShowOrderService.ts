import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Orders from "@modules/orders/typeorm/entities/Orders";

import OrdersRepository from "../typeorm/reposotories/OrdersRepository";


interface IRequest {
    id: string;
    
}

class ShowOrderService {

    public async execute({id}: IRequest ): Promise<Orders> {

        const ordersRepository = getCustomRepository(OrdersRepository);

        const orders = await ordersRepository.findById(id);

        if (!orders) {
           throw new AppError('Order not found');
        }

        return orders;
    }
}


export default ShowOrderService;