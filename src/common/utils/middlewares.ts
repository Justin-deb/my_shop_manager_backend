import { NextFunction, Request, Response } from 'express';
import EnvVars, { NodeEnvs } from '../constants/env';
export const errorhandler = (err:Error,req:Request,res:Response,next:NextFunction)=>{
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);

    const bodyResponse = {
        message: err.message,
        stack: EnvVars.NodeEnv === NodeEnvs.PRODUCTION ? "" : err.stack 
    }

    console.error("Error: ", bodyResponse);
    res.json(bodyResponse);
}