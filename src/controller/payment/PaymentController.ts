import { Response,Request,NextFunction } from 'express';
import * as paymentService from '../../service/payment/PaymentService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';
import { getParamNumber, getQueryString } from '../../common/utils/ParameterExtraction';

export const findAllByInvoiceId = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const invoiceId = getParamNumber(req,'invoiceId');
    try {
        const payments = await paymentService.findAllByInvoiceId(shopId,invoiceId);
        return controllerResponse(res,HttpStatusCodes.OK,payments);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const invoiceId = getParamNumber(req,'invoiceId');
    const paymentId = getParamNumber(req,'paymentId');
    try {
        const payment = await paymentService.findById(shopId,invoiceId,paymentId);
        return controllerResponse(res,HttpStatusCodes.OK,payment);
    } catch (error) {
        next(error);
    }
}

export const findByReference = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'positionId');
    const invoiceId = getParamNumber(req,'invoiceId');
    const reference = getQueryString(res,'reference');
    try {
        const payment = await paymentService.findByReference(shopId,invoiceId,reference);
        return controllerResponse(res,HttpStatusCodes.OK,payment);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const payment = await paymentService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            paymentId:payment?.paymentId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const invoiceId = getParamNumber(req,'invoiceId');
    const paymentId = getParamNumber(req,'paymentId');
    const {dto} = req.body;
    try {
        await paymentService.update(shopId,invoiceId,paymentId,dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const invoiceId = getParamNumber(req,'invoiceId');
    const paymentId = getParamNumber(req,'paymentId');
    try {
        await paymentService.remove(shopId,invoiceId,paymentId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}