import { Request,Response,NextFunction } from 'express';
import * as customerProductService from '../../service/product/CustomerProductService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';
import { getParamNumber } from '../../common/utils/ParameterExtraction';

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,customerId,productId} = req.body;
    try {
        const customerProduct = await customerProductService.findById(shopId,customerId,productId);
        return controllerResponse(res,HttpStatusCodes.OK,customerProduct);
    } catch (error) {
        next(error);
    }
}

export const findByCustomerId = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const customerId = getParamNumber(req,'customerId');
    try {
        const customerProduct = await customerProductService.findByCustomerId(shopId,customerId);
        return controllerResponse(res,HttpStatusCodes.OK,customerProduct);
    } catch (error) {
        next(error);
    }
}

export const findByProductId = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const productId = getParamNumber(req,'productId');
    try {
        const customerProduct = await customerProductService.findByProductId(shopId,productId);
        return controllerResponse(res,HttpStatusCodes.OK,customerProduct);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const customerProduct = await customerProductService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            productId:customerProduct?.productId,
            customerId:customerProduct?.customerId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const customerId = getParamNumber(req,'customerId');
    const productId = getParamNumber(req,'productId');
    const {dto} = req.body;
    try {
        await customerProductService.update(shopId,customerId,productId,dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const customerId = getParamNumber(req,'customerId');
    const productId = getParamNumber(req,'productId');
    try {
        await customerProductService.remove(shopId,customerId,productId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}