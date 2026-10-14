import { Request,Response,NextFunction } from 'express';
import * as shopService from '../../service/shop/ShopService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';
import { getParamNumber } from '../../common/utils/ParameterExtraction';

export const findAll = async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const shops = await shopService.findAll();
        return controllerResponse(res,HttpStatusCodes.OK,shops);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    try {
        const shop = await shopService.findById(shopId);
        return controllerResponse(res,HttpStatusCodes.OK,shop);
    } catch (error) {
        next(error);
    }
}

export const findByOwnerId = async (req:Request,res:Response,next:NextFunction) =>{
    const ownerId = getParamNumber(req,'ownerId');
    try {
        const shop = await shopService.findByOwnerId(ownerId);
        return controllerResponse(res,HttpStatusCodes.OK,shop);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const shop = await shopService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            shopId:shop?.shopId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const {dto} = req.body;
    try {
        await shopService.update(shopId,dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    try {
        await shopService.remove(shopId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}