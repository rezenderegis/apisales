import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Order from "../typeorm/entities/order";
import { OrderRepository } from "../typeorm/reposotories/OrdersReposotory";


interface IRequest {
    id: string;
    
}

class ShowOrderService {

    public async execute({id}: IRequest ): Promise<Order> {

        const ordersRepository = getCustomRepository(OrderRepository);

        const order = ordersRepository.findById(id);

        if (!order) {
           throw new AppError('Order not found');
        }

        return order;
    }
}


export default ShowOrderService;