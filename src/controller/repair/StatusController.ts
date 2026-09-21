import { Request,Response,NextFunction } from 'express';
import * as statusService from '../../service/repair/StatusService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';

export const findAll = async (req:Request,res:Response,next:NextFunction) =>{    
    try {
        const status = await statusService.findAll();
        return controllerResponse(res,HttpStatusCodes.OK,status);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const {statusId} = req.body;
    try {
        const status = await statusService.findById(statusId);
        return controllerResponse(res,HttpStatusCodes.OK,status);
    } catch (error) {
        next(error);
    }
}

export const findByName = async (req:Request,res:Response,next:NextFunction) =>{
    const {name} = req.body;
    try {
        const status = await statusService.findByName(name);
        return controllerResponse(res,HttpStatusCodes.OK,status);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const status = await statusService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            statusId:status?.statusId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        await statusService.update(dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const {statusId} = req.body;
    try {
        await statusService.remove(statusId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}