import { Request,Response,NextFunction } from 'express';
import { treeifyError, ZodError, ZodType } from 'zod';
import HttpStatusCodes from '../constants/HttpStatusCodes';

type RequestSchema = ZodType<{
    body?:unknown;
    query:Request['query'];
    params:Request['params'];
}>

export const validateSchema = (schema:RequestSchema) =>{
    return async (req:Request,res:Response,next:NextFunction) =>{
        try {
            //Parse and validate the request
            const parsed = await schema.parseAsync({
                body:req.body,
                query:req.query,
                params:req.params
            });

            //Change the unvalidated data for the validated one
            req.body = parsed.body;
            req.query = parsed.query;
            req.params = parsed.params;

            //If there are no error then procede
            next(); 
        } catch (error) {
            if(error instanceof ZodError){
                return res.status(HttpStatusCodes.BAD_REQUEST).json({
                    status:'Request validation failed',
                    errors:treeifyError(error)
                });
            }

            next(error);
        }
    }
}