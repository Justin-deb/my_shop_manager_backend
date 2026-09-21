import { Request,Response,NextFunction } from 'express';
import * as paymentMethodService from '../../service/payment/PaymentMethodService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';

export const findAll = async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const paymentMethods = await paymentMethodService.findAll();
        return controllerResponse(res,HttpStatusCodes.OK,paymentMethods);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const {paymentMethodId} = req.body;
    try {
        const paymentMethod = await paymentMethodService.findById(paymentMethodId);
        return controllerResponse(res,HttpStatusCodes.OK,paymentMethod);
    } catch (error) {
        next(error);
    }
}

export const findByName = async (req:Request,res:Response,next:NextFunction) =>{
    const {name} = req.body;
    try {
        const paymentMethod = await paymentMethodService.findByName(name);
        return controllerResponse(res,HttpStatusCodes.OK,paymentMethod);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const paymentMethod = await paymentMethodService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            paymentMethodId:paymentMethod?.paymentMethodId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        await paymentMethodService.update(dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const {paymentMethodId} = req.body;
    try {
        await paymentMethodService.remove(paymentMethodId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}