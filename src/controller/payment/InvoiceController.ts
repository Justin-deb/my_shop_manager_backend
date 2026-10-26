import { Request,Response,NextFunction } from 'express';
import * as invoiceService from "../../service/payment/InvoiceService.js";
import { controllerResponse } from "../../common/utils/ControllerResponse.js";
import HttpStatusCodes from "../../common/constants/HttpStatusCodes.js";
import { getParamNumber } from "../../common/utils/ParameterExtraction.js";

export const findAllByRepairId = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const repairId = getParamNumber(req,'repairId');
    try {
        const invoices = await invoiceService.findAllByRepairId(shopId,repairId);
        return controllerResponse(res,HttpStatusCodes.OK,invoices);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const invoiceId = getParamNumber(req,'invoiceId');
    try {
        const invoice = await invoiceService.findById(shopId,invoiceId);
        return controllerResponse(res,HttpStatusCodes.OK,invoice);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const invoice = await invoiceService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            invoiceId:invoice?.invoiceId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const invoiceId = getParamNumber(req,'invoiceId');
    const {dto} = req.body;
    try {
        await invoiceService.update(shopId,invoiceId,dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const invoiceId = getParamNumber(req,'invoiceId');
    try {
        await invoiceService.remove(shopId,invoiceId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}