import { Request,Response,NextFunction } from 'express';
import * as userRolesService from "../../service/user/UserRolesService.js";
import { controllerResponse } from "../../common/utils/ControllerResponse.js";
import HttpStatusCodes from "../../common/constants/HttpStatusCodes.js";
import { getParamNumber } from "../../common/utils/ParameterExtraction.js";

export const findAll = async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const userRoles = await userRolesService.findAll();
        return controllerResponse(res,HttpStatusCodes.OK,userRoles);
    } catch (error) {
        next(error);
    }
}

export const findAllRolesByUserId = async (req:Request,res:Response,next:NextFunction) =>{
    const userId = getParamNumber(req,'userId');
    try {
        const roles = await userRolesService.findAllRolesByUserId(userId);
        return controllerResponse(res,HttpStatusCodes.OK,roles);
    } catch (error) {
        next(error);
    }
}

export const findAllUsersByRoleId = async (req:Request,res:Response,next:NextFunction) =>{
    const roleId = getParamNumber(req,'roleId');
    try {
        const users = await userRolesService.findAllUsersByRoleId(roleId);
        return controllerResponse(res,HttpStatusCodes.OK,users);
    } catch (error) {
        next(error);
    }
}

export const userHasRole = async (req:Request,res:Response,next:NextFunction) =>{
    const userId = getParamNumber(req,'userId');
    const roleId = getParamNumber(req,'roleId');
    try {
        const hasRole = await userRolesService.userHasRole(userId,roleId);
        return controllerResponse(res,HttpStatusCodes.OK,hasRole);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const userId = getParamNumber(req,'userId');
    const roleId = getParamNumber(req,'roleId');
    try {
        const userRole = await userRolesService.create(userId,roleId);
        return controllerResponse(res,HttpStatusCodes.CREATED,userRole);
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const userId = getParamNumber(req,'userId');
    const roleId = getParamNumber(req,'roleId');
    try {
        await userRolesService.remove(userId,roleId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}