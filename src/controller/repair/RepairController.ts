import { Request,Response,NextFunction } from 'express';
import * as repairService from '../../service/repair/RepairService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';

export const findAllByShopId = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId} = req.body;
    try {
        const repairs = await repairService.findAllByShopId(shopId);
        return controllerResponse(res,HttpStatusCodes.OK,repairs);
    } catch (error) {
        next(error);
    }
}

export const findByRepairId = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,repairId} = req.body;
    try {
        const repair = await repairService.findByRepairId(shopId,repairId);
        return controllerResponse(res,HttpStatusCodes.OK,repair);
    } catch (error) {
        next(error);
    }
}

export const findAllByStatusId = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,statusId} = req.body;
    try {
        const repairs = await repairService.findAllByStatusId(shopId,statusId);
        return controllerResponse(res,HttpStatusCodes.OK,repairs);
    } catch (error) {
        next(error);
    }
}

export const findAllByCustomerId = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,customerId} = req.body;
    try {
        const repairs = await repairService.findAllByCustomerId(shopId,customerId);
        return controllerResponse(res,HttpStatusCodes.OK,repairs);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const repair = await repairService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            repairId:repair?.repairId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        await repairService.update(dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,repairId} = req.body;
    try {
        await repairService.remove(shopId,repairId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}