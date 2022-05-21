import { Request, Response } from "express";
import ListBrandsService from "../services/ListBrandsService";
import CreateBrandsService from "../services/CreateBrandsService";
import UpdateBrandsService from "../services/UpdateBrandsSerice";
import ShowBrandsSerive from "../services/ShowBrandsService";
export default class BrandsController {

public async index(request: Request, response: Response): Promise<Response>{

    const listBrands = new ListBrandsService();

    const brands = await listBrands.execute();

    return response.json(brands);

}

public async create (request: Request, response: Response): Promise<Response> {

    const {name} = request.body;

    const createBrand = new CreateBrandsService();

    const brand = await createBrand.execute({
        name,
    });

    return response.json(brand);

}

public async update (request: Request, response: Response): Promise<Response> {

    const {name} = request.body;

    const {id} = request.params;

    const updateBrands = new UpdateBrandsService();

    const brand = await updateBrands.execute({
        id, 
        name
    });

    return response.json(brand);

}

public async show (request: Request, response: Response): Promise<Response> {

    const {id} = request.params;

    const showBrand = new ShowBrandsSerive();

    const brand = await showBrand.execute({id});
   
    return response.json(brand);

}



}