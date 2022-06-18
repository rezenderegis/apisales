import CreateProductService from "@modules/products/services/CreateProductService";
import { Request, Response } from "express";
import ResetPasswordService from "../../../services/ResetPasswordService";
import SendForgotPasswordEmailService from "../../../services/SendForgotPasswordEmailService";

export default class ResetPasswordController {
    
    public async create(request: Request, response: Response): Promise<Response> {

        const { password, token} = request.body;

        const resetPassord = new ResetPasswordService();
        

         await resetPassord.execute({

            password,
            token, 
            
        });
        
        return response.status(204).json();
        
    }


}