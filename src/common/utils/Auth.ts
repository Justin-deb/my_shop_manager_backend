import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { UnauthroizeError } from "../../exceptions/UnauthroizeError.js";
import { PayloadJWT } from "../../models/security/PayloadJWT.js";
import { sessionStorage } from "../../redis/RedisClients.js";

const SECRET_KEY = process.env.SECRET_KEY;

export const authMiddleware = async (req:Request,res:Response,next:NextFunction) =>{
    //Get the header from the request
    const authHeader = req.headers['authorization'];

    if(!authHeader){
        next(new UnauthroizeError("No Token Provided"));
    }else if(!authHeader!.startsWith('Bearer ')){
        next(new UnauthroizeError("Bad Token Provided"));
    }
    try {
        //Get the token from the header
        const token = authHeader?.split(' ')[1];

        const storedUser = await sessionStorage.hGetAll(`sessionToken:${token}`);
        const decoded = jwt.verify(token!,SECRET_KEY!) as PayloadJWT;

        if(Object.keys(storedUser).length === 0){
            next(new UnauthroizeError('The Token Provided does not exists'));
        }

        if(storedUser.userId !== decoded.id){
            next(new UnauthroizeError('The token provided does not belong to the user'));
        }

        res.locals.userId = storedUser.id;
        res.locals.roleId = storedUser.roleId;
        
        next();
    } catch (error) {
        next(error);
    }
}