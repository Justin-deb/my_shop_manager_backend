import { Request,Response,NextFunction } from 'express';
import * as roleService from '../../service/user/RoleService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';

export const findAll = async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const roles = await roleService.findAll();
        return controllerResponse(res,HttpStatusCodes.OK,roles);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const {roleId} = req.body;
    try {
        const role = await roleService.findById(roleId);
        return controllerResponse(res,HttpStatusCodes.OK,role);
    } catch (error) {
        next(error);
    }
}

export const findByName = async (req:Request,res:Response,next:NextFunction) =>{
    const {name} = req.body;
    try {
        const roles = await roleService.findByName(name);
        return controllerResponse(res,HttpStatusCodes.OK,roles);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const role = await roleService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            roleId:role?.roleId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        await roleService.update(dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const {roleId} = req.body;
    try {
        await roleService.remove(roleId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}