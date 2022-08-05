import { Router } from "express";
import SupplierController from "../controllers/SupplierController";

const supplierRouter = Router();

const supplierController = new SupplierController();

supplierRouter.get('/', supplierController.index);

supplierRouter.post('/', supplierController.createSupplier);

supplierRouter.delete('/:id', supplierController.delete);

supplierRouter.get('/:id', supplierController.show);

supplierRouter.put('/:id', supplierController.update);

export default supplierRouter;