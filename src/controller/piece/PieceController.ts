import { Request,Response,NextFunction } from 'express';
import * as pieceService from '../../service/piece/PieceService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';

export const findAll = async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const pieces = await pieceService.findAll();
        return controllerResponse(res,HttpStatusCodes.OK,pieces);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const {pieceId} = req.body;
    try {
        const piece = await pieceService.findById(pieceId);
        return controllerResponse(res,HttpStatusCodes.OK,piece);
    } catch (error) {
        next(error);
    }
}

export const findByName = async (req:Request,res:Response,next:NextFunction) =>{
    const {name} = req.body;
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
    const {dto} = req.body;
    try {
        await pieceService.update(dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const {pieceId} = req.body;
    try {
        await pieceService.remove(pieceId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}