import { Request } from "express";
import ListBrandsService from "../services/ListBrandsService";

export default class BrandsController {

public async index(request: Request, response: Response): Promise<Response>{

    const listBrands = new ListBrandsService();

    const brands = await listBrands.execute();

    return response.json(brands);

}


}