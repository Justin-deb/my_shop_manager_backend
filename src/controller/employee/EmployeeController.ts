import { Request,Response,NextFunction } from 'express';
import * as employeeService from "../../service/employee/EmployeeService.js";
import { controllerResponse } from "../../common/utils/ControllerResponse.js";
import HttpStatusCodes from "../../common/constants/HttpStatusCodes.js";
import { getParamNumber, getQueryString } from "../../common/utils/ParameterExtraction.js";

export const findAllByShopId = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    try {
        const employees = await employeeService.findAllByShopId(shopId);
        return controllerResponse(res,HttpStatusCodes.OK,employees);
    } catch (error) {
        next(error);
    }
}

export const findByName = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const name = getQueryString(res,'name');
    try {
        const employee = await employeeService.findByName(shopId,name);
        return controllerResponse(res,HttpStatusCodes.OK,employee);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const employeeId = getParamNumber(req,'employeeId');
    try {
        const employee = await employeeService.findById(shopId,employeeId);
        return controllerResponse(res,HttpStatusCodes.OK,employee);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const employee = await employeeService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            employeeId:employee?.userId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const employeeId = getParamNumber(req,'employeeId');
    const {dto} = req.body;
    try {
        await employeeService.update(shopId,employeeId,dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const shopId = getParamNumber(req,'shopId');
    const employeeId = getParamNumber(req,'employeeId');
    try {
        await employeeService.remove(shopId,employeeId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}