import { AppError } from "./AppError.js";

export class ServerError extends AppError{
    constructor(message:string){
        super(message,500);
    }
}