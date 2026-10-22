import { AppError } from "./AppError.js";

export class UnauthroizeError extends AppError{
    constructor(message:string) {
        super(message,401);
    }
}