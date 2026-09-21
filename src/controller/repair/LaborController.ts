import { Request,Response,NextFunction } from 'express';
import * as laborService from '../../service/repair/LaborService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const{shopId, repairId, laborId} = req.body;
    try {
        const repair = await laborService.findById(shopId,repairId,laborId);
        return controllerResponse(res,HttpStatusCodes.OK,repair);
    } catch (error) {
        next(error);
    }
}

export const findAllByRepairId = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId, repairId} = req.body;
    try {
        const repairs = await laborService.findAllByRepairId(shopId, repairId);    
        return controllerResponse(res,HttpStatusCodes.OK,repairs);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const labor = await laborService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            laborId:labor?.laborId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        await laborService.update(dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,repairId,laborId} = req.body;
    try {
        await laborService.remove(shopId,repairId,laborId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}