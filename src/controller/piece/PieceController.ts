import { Request,Response,NextFunction } from 'express';
import * as pieceService from "../../service/piece/PieceService.js";
import { controllerResponse } from "../../common/utils/ControllerResponse.js";
import HttpStatusCodes from "../../common/constants/HttpStatusCodes.js";
import { getParamNumber, getQueryString } from "../../common/utils/ParameterExtraction.js";

export const findAll = async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const pieces = await pieceService.findAll();
        return controllerResponse(res,HttpStatusCodes.OK,pieces);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const pieceId = getParamNumber(req,'PieceId')
    try {
        const piece = await pieceService.findById(pieceId);
        return controllerResponse(res,HttpStatusCodes.OK,piece);
    } catch (error) {
        next(error);
    }
}

export const findByName = async (req:Request,res:Response,next:NextFunction) =>{
    const name = getQueryString(res,'name');
    try {
        const pieces = await pieceService.findByName(name);
        return controllerResponse(res,HttpStatusCodes.OK,pieces);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const piece = await pieceService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            pieceId:piece?.pieceId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const pieceId = getParamNumber(req,'pieceId');
    const {dto} = req.body;
    try {
        await pieceService.update(pieceId,dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const pieceId = getParamNumber(req,'pieceId');
    try {
        await pieceService.remove(pieceId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}