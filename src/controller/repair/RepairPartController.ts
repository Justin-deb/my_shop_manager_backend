import { Request,Response,NextFunction } from 'express';
import * as repairPartService from "../../service/repair/RepairPartService.js";
import { controllerResponse } from "../../common/utils/ControllerResponse.js";
import HttpStatusCodes from "../../common/constants/HttpStatusCodes.js";
import { getParamNumber } from "../../common/utils/ParameterExtraction.js";

export const findAllByRepairId = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const repairId = getParamNumber(req,'repairId');
    try {
        const repairParts = await repairPartService.findAllByRepairId(shopId,repairId);
        return controllerResponse(res,HttpStatusCodes.OK,repairParts);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const repairId = getParamNumber(req,'repairId');
    const pieceId = getParamNumber(req,'pieceId');
    try {
        const repairPart = await repairPartService.findById(shopId,repairId,pieceId);
        return controllerResponse(res,HttpStatusCodes.OK,repairPart);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const repairPart = await repairPartService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            repairId:repairPart?.repairId,
            pieceId:repairPart?.pieceId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const repairId = getParamNumber(req,'repairId');
    const pieceId = getParamNumber(req,'pieceId');
    const {dto} = req.body;
    try {
        await repairPartService.update(shopId,repairId,pieceId,dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const repairId = getParamNumber(req,'repairId');
    const pieceId = getParamNumber(req,'pieceId');
    try {
        await repairPartService.remove(shopId,repairId,pieceId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}