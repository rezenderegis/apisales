import { Request, Response } from "express";
import { CreateSupplierService } from "../services/CreateSupplierService";
import { DeleteSupplierservice } from "../services/DeleteSupplierService";
import { ListSupplierService } from "../services/ListSupplierService";
import ShowSupplierService from "../services/ShowSupplierService";
import { UpdateSupplierService } from "../services/UpdateSupplierService";

export default class SupplierController {


    public async createSupplier (request: Request, response: Response): Promise<Response> {

        const {name, description} = request.body;

        const createSupplier = new CreateSupplierService();

        const supplier = await createSupplier.execute({
            name, description,
        });

        return response.json(supplier);
            
    }

    public async index (request: Request, response: Response) {

        const listSupplier = new ListSupplierService();

        const suppliers = await listSupplier.execute();

        return response.json(suppliers);

    }

    public async update (request: Request, response: Response) {

        const {name, description} = request.body;

        const {id} = request.params;

        const updateSupplier = new UpdateSupplierService();

        const supplier = await updateSupplier.execute({
            id, name, description,
        });

        return response.json(supplier);

    }

    public async delete (request: Request, response: Response) {

        const {id} = request.params;

        const deleteSupplier = new DeleteSupplierservice();

        deleteSupplier.execute({
            id});

        return response.json([]);
    }

    public async show(request: Request, response: Response) {

        const {id} = request.params;
    
        const supplierService = new ShowSupplierService();

        const supplier = await supplierService.execute(id);

        return response.json(supplier);

    }





}