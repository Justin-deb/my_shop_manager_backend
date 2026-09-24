import { Request,Response,NextFunction } from 'express';
import * as customerProductService from '../../service/product/CustomerProductService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';

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
    const {shopId,customerId} = req.body;
    try {
        const customerProduct = await customerProductService.findByCustomerId(shopId,customerId);
        return controllerResponse(res,HttpStatusCodes.OK,customerProduct);
    } catch (error) {
        next(error);
    }
}

export const findByProductId = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,productId} = req.body;
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
    const {dto} = req.body;
    try {
        await customerProductService.update(dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,customerId,productId} = req.body;
    try {
        await customerProductService.remove(shopId,customerId,productId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}