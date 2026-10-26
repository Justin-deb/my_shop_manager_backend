import { Request,Response,NextFunction } from "express";
import * as userAuthService from '../../../service/security/user/UserAuthService.js';
import { getParamNumber, getQueryString } from "../../../common/utils/ParameterExtraction.js";

// userAuthService.

export const registerUser = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    
    try {
        const tokens = await userAuthService.registerUser(dto);

        return res
        .cookie('refreshToken',tokens.refreshToken,{httpOnly:true,sameSite:'strict'})
        .header('authorization',tokens.sessionToken)
        .status(200).json({status:'Success'});
    } catch (error) {
        next(error);
    }
}

export const loginUser = async (req:Request,res:Response,next:NextFunction) =>{
    const userId = getParamNumber(req,'userId');
    const password = getQueryString(res,'password');

    try {
        const tokens = await userAuthService.loginUser(userId,password);
        
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
        const sessionToken = await userAuthService.refreshSessionToken(userId,refreshToken);

        return res.header('authorization',sessionToken).status(200);
    } catch (error) {
        next(error);
    }
}