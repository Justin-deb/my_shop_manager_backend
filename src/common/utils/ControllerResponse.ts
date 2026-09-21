import { Response } from 'express';
//Function that builds the response of a controller, helps to reduce repetitive code
export const controllerResponse = (res:Response,statusCode:number,body?:any) =>{
    let jsonContent;
    let status;

    switch(statusCode){
        case 200:
            status = 'Success';
            break;
        case 201:
            status = 'Created';
            break;
        case 204:
            status = 'Deleted';
            break;
        default:
            status = 'Status code not found'
            break;
    }
    
    if(body){
        jsonContent = {
            status:status,
            body:body
        };
    }else{
        jsonContent = {
            status:status
        }
    }

    return res.status(statusCode).json(jsonContent);
}