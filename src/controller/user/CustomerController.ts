import { Request,Response,NextFunction } from 'express';
import * as customerService from '../../service/user/CustomerService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';

export const findAll = async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const customers = await customerService.findAll();
        return controllerResponse(res,HttpStatusCodes.OK,customers);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,customerId} = req.body;
    try {
        const customer = await customerService.findById(shopId,customerId);
        return controllerResponse(res,HttpStatusCodes.OK,customer);
    } catch (error) {
        next(error);
    }
}

export const findByFullName = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const customer = await customerService.findByFullName(dto);
        return controllerResponse(res,HttpStatusCodes.OK,customer);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const customer = await customerService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            customerId:customer?.customerId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        await customerService.update(dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,customerId} = req.body;
    try {
        await customerService.remove(shopId,customerId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}