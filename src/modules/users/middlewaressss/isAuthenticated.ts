import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import {verify} from 'jsonwebtoken';
import authConfig from '@config/auth';


/**
 * We'll need to include this meddleware in every route 
 * to protect.
 */
export default function isAuthenticated (
    request: Request, 
    response: Response,
    next: NextFunction,

): void  {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppError('JWT Token is missing.');
    }

    //First position is Bearer, second is token
    const [,token] = authHeader.split(' ');//Space here is mandatory

    try {

        /* Inform token and secret
        This verification check if the toke was created with the secret of 
        this application.
        */
        const decodeToken = verify(token, authConfig.jwt.secret);
        return next();
    } catch {
        throw new AppError('Invalid jwt token');
    }

}