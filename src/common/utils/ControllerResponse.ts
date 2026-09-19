import { Response } from 'express';
//Function that builds the response of a controller, helps to reduce repetitive code
export const controllerResponse = (res:Response,statusCode:number,status:string,message:string,body?:any) =>{
    let jsonContent;
    if(body){
        jsonContent = {
            status:status,
            message:message,
            body:body
        };
    }else{
        jsonContent = {
            status:status,
            message:message
        }
    }

    return res.status(statusCode).json(jsonContent);
}