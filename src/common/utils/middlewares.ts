import { NextFunction, Request, Response } from 'express';
import EnvVars, { NodeEnvs } from '../constants/env';
import { AppError } from '../../exceptions/AppError';

export const errorHandler = (err:unknown,_req:Request,res:Response,_next:NextFunction)=>{
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    
    const message = err instanceof Error 
                ? err.message 
                : "Internal server error";

    console.error(err);

    const bodyResponse = {
        message: message,
        ...(EnvVars.NodeEnv !== NodeEnvs.PRODUCTION && {
            stack: err instanceof Error ? err.stack : undefined,
        }),
    }
    
    res.status(statusCode).json(bodyResponse);
}