import { EntityRepository, Repository } from "typeorm";
import Sales from "../entities/Sales";

@EntityRepository(Sales)
class SalesRepository extends Repository<Sales>{

}

export default SalesRepository;