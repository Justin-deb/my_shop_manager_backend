import { Request,Response,NextFunction } from 'express';
import * as customerService from '../../service/user/CustomerService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';
import { getParamNumber, getQueryString } from '../../common/utils/ParameterExtraction';
import { FullNameCustomerDto } from '../../dto/user/common/FullNameCustomerDto';

export const findAll = async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const customers = await customerService.findAll();
        return controllerResponse(res,HttpStatusCodes.OK,customers);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const customerId = getParamNumber(req,'customerId');
    try {
        const customer = await customerService.findById(shopId,customerId);
        return controllerResponse(res,HttpStatusCodes.OK,customer);
    } catch (error) {
        next(error);
    }
}

export const findByFullName = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const dto:FullNameCustomerDto = {
        firstName:getQueryString(res,'firstName'),
        middleName:getQueryString(res,'middleName'),
        lastName:getQueryString(res,'lastName'),
        secondLastName:getQueryString(res,'secondLastName')
    }
    try {
        const customer = await customerService.findByFullName(shopId,dto);
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
    const shopId = getParamNumber(req,'shopId');
    const customerId = getParamNumber(req,'customerId');
    const {dto} = req.body;
    try {
        await customerService.update(shopId,customerId,dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const customerId = getParamNumber(req,'customerId');
    try {
        await customerService.remove(shopId,customerId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}