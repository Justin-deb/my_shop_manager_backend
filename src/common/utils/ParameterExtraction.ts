import { Request,Response } from "express"

export const getParamNumber = (req:Request,param:string):number =>{
    return Number(req.params[param]);
}

export const getQueryString = (res:Response,query:string):string =>{
    return String(res.locals.validatedQuery[query]);
}