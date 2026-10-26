import { Request,Response,NextFunction } from 'express';
import z, { treeifyError, ZodError, ZodRecord, ZodType } from 'zod';
import HttpStatusCodes from "../constants/HttpStatusCodes.js";
import { AuthSchema, CookieSchema, RequestSchema } from '../../models/common/ZodTypes.js';

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
            req.params = parsed.params;
            res.locals.validatedQuery = parsed.query;

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

export const validateCookie = (schema:CookieSchema) =>{
    return async (req:Request,res:Response,next:NextFunction) =>{
        try {
            //Parse and validate the request
            const parsed = await schema.parseAsync({
                params:req.params,
                cookies:req.cookies
            });

            //Change the unvalidated data for the validated one
            req.params = parsed.params;
            req.cookies = parsed.cookies;

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


export const validateAuth = (schema:AuthSchema) =>{
    return async (req:Request,res:Response,next:NextFunction) =>{
        try {
            //Parse and validate the request
            const parsed = await schema.parseAsync({
                headers:req.headers,
                cookies:req.cookies
            });

            //Change the unvalidated data for the validated one
            req.headers = parsed.headers;
            req.cookies = parsed.cookies;

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

export const validateRecord = (record:ZodRecord) =>{
    return async (req:Request,res:Response,next:NextFunction) =>{
        try {
            const parsed = await record.parseAsync(req.body);
            req.body = parsed;
            
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