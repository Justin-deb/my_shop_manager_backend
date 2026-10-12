import { Request,Response,NextFunction } from 'express';
import * as repairService from '../../service/repair/RepairService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';
import { getParamNumber } from '../../common/utils/ParameterExtraction';

export const findAllByShopId = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    try {
        const repairs = await repairService.findAllByShopId(shopId);
        return controllerResponse(res,HttpStatusCodes.OK,repairs);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const repairId = getParamNumber(req,'repairId');
    try {
        const repair = await repairService.findById(shopId,repairId);
        return controllerResponse(res,HttpStatusCodes.OK,repair);
    } catch (error) {
        next(error);
    }
}

export const findAllByStatusId = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const statusId = getParamNumber(req,'statusId');
    try {
        const repairs = await repairService.findAllByStatusId(shopId,statusId);
        return controllerResponse(res,HttpStatusCodes.OK,repairs);
    } catch (error) {
        next(error);
    }
}

export const findAllByCustomerId = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const customerId = getParamNumber(req,'customerId');
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
    const shopId = getParamNumber(req,'shopId');
    const repairId = getParamNumber(req,'repairId');
    const {dto} = req.body;
    try {
        await repairService.update(shopId,repairId,dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const repairId = getParamNumber(req,'repairId');
    try {
        await repairService.remove(shopId,repairId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}