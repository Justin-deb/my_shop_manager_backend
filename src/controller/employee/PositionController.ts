import { Request,Response,NextFunction } from 'express';
import * as positionService from "../../service/employee/PositionService.js";
import { controllerResponse } from "../../common/utils/ControllerResponse.js";
import HttpStatusCodes from "../../common/constants/HttpStatusCodes.js";
import { getParamNumber, getQueryString } from "../../common/utils/ParameterExtraction.js";

export const findAll = async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const positions = await positionService.findAll();
        return controllerResponse(res,HttpStatusCodes.OK,positions);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const positionId = getParamNumber(req,'positionId');
    try {
        const position = await positionService.findById(positionId);
        return controllerResponse(res,HttpStatusCodes.OK,position);
    } catch (error) {
        next(error);
    }
}

export const findByName = async (req:Request,res:Response,next:NextFunction) =>{
    const name = getQueryString(res,'name');
    try {
        const position = await positionService.findByName(name);
        return controllerResponse(res,HttpStatusCodes.OK,position);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const position = await positionService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            positionId:position?.positionId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const positionId = getParamNumber(req,'positionId');
    const {dto} = req.body;
    try {
        await positionService.update(positionId,dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const positionId = getParamNumber(req,'positionId');
    try {
        await positionService.remove(positionId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}