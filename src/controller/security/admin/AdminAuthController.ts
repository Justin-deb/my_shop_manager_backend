import { Request,Response,NextFunction } from "express";
import * as adminAuthService from '../../../service/security/admin/AdminAuthService.js';
import { getParamNumber, getQueryString } from "../../../common/utils/ParameterExtraction.js";

export const registerAdmin = async (req:Request,res:Response,next:NextFunction) =>{
    const userId = getParamNumber(req,'userId');

    try {
        await adminAuthService.registerAdmin(userId);

        return res.status(200);
    } catch (error) {
        next(error);
    }
}

export const loginAdmin = async (req:Request,res:Response,next:NextFunction) =>{
    const userId = getParamNumber(req,'userId');
    const password = getQueryString(res,'password');

    try {
        const tokens = await adminAuthService.loginAdmin(userId,password);
            
        return res
        .cookie('refreshToken',tokens.refreshToken,{httpOnly:true,sameSite:'strict'})
        .header('authorization',tokens.sessionToken)
        .status(200);
    } catch (error) {
        next(error);
    }
}

export const refreshSessionToken = async (req:Request,res:Response,next:NextFunction) =>{
    const refreshToken:string = req.cookies['refreshToken'];
    const userId = getParamNumber(req,'userId');

    try {
        const sessionToken = await adminAuthService.refreshSessionToken(userId,refreshToken);

        return res.header('authorization',sessionToken).status(200);
    } catch (error) {
        next(error);
    }
}