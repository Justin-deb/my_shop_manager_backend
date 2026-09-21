import { Request,Response,NextFunction } from 'express';
import * as paymentStatusService from '../../service/payment/PaymentStatusService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';

export const findAll = async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const paymentStatus = await paymentStatusService.findAll();
        return controllerResponse(res,HttpStatusCodes.OK,paymentStatus);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const {paymentStatusId} = req.body;
    try {
        const paymentStatus = await paymentStatusService.findById(paymentStatusId);
        return controllerResponse(res,HttpStatusCodes.OK,paymentStatus);
    } catch (error) {
        next(error);
    }
}

export const findByName = async (req:Request,res:Response,next:NextFunction) =>{
    const {name} = req.body;
    try {
        const paymentStatus = await paymentStatusService.findByName(name);
        return controllerResponse(res,HttpStatusCodes.OK,paymentStatus);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const paymentStatus = await paymentStatusService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            paymentStatusId:paymentStatus?.paymentStatusId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        await paymentStatusService.update(dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const {paymentStatusId} = req.body;
    try {
        await paymentStatusService.remove(paymentStatusId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}