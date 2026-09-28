import { Request,Response,NextFunction } from 'express';
import * as userService from '../../service/user/UserService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';

export const findAll = async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const users = await userService.findAll();
        return controllerResponse(res,HttpStatusCodes.OK,users);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const {userId} = req.body;
    try {
        const user = await userService.findById(userId);
        return controllerResponse(res,HttpStatusCodes.OK,user);
    } catch (error) {
        next(error);
    }
}

export const findByEmail = async (req:Request,res:Response,next:NextFunction) =>{
    const {email} = req.body;
    try {
        const user = await userService.findByEmail(email);
        return controllerResponse(res,HttpStatusCodes.OK,user);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const user = await userService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            userId:user?.userId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        await userService.update(dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const {userId} = req.body;
    try {
        await userService.remove(userId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}