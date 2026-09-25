import { Request,Response,NextFunction } from 'express';
import * as warehouseService from '../../service/shop/WarehouseService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';

export const findAllByShopId = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId} = req.body;
    try {
        const warehouse = await warehouseService.findAllByShopId(shopId);
        return controllerResponse(res,HttpStatusCodes.OK,warehouse);
    } catch (error) {
        next(error);
    }
}

export const findByPieceId = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,pieceId} = req.body;
    try {
        const pieces = await warehouseService.findByPieceId(shopId,pieceId);
        return controllerResponse(res,HttpStatusCodes.OK,pieces);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const warehouse = await warehouseService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            pieceId:warehouse?.pieceId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        await warehouseService.update(dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,pieceId} = req.body;
    try {
        await warehouseService.remove(shopId,pieceId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}