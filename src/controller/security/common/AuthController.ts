import { Request,Response,NextFunction } from "express";
import * as authService from '../../../service/security/common/AuthService.js';

export const logout = async (req:Request,res:Response,next:NextFunction) =>{
    const authHeader = req.headers['authorization'];
    const refreshToken = req.cookies['refreshToken'];

    return authService.logout(authHeader!,refreshToken);
}