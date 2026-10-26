import { Request,Response,NextFunction } from 'express';
import * as productTypeService from "../../service/product/ProductTypeService.js";
import { controllerResponse } from "../../common/utils/ControllerResponse.js";
import HttpStatusCodes from "../../common/constants/HttpStatusCodes.js";
import { getParamNumber, getQueryString } from "../../common/utils/ParameterExtraction.js";

export const findAll =  async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const productTypes = await productTypeService.findAll();
        return controllerResponse(res,HttpStatusCodes.OK,productTypes);
    } catch (error) {
        next(error);
    }
}

export const findById =  async (req:Request,res:Response,next:NextFunction) =>{
    const productTypeId = getParamNumber(req,'productTypeId');
    try {
        const productType = await productTypeService.findById(productTypeId);
        return controllerResponse(res,HttpStatusCodes.OK,productType);
    } catch (error) {
        next(error);
    }
}

export const findByName =  async (req:Request,res:Response,next:NextFunction) =>{
    const name = getQueryString(res,'name');
    try {
        const productTypes = await productTypeService.findByName(name);
        return controllerResponse(res,HttpStatusCodes.OK,productTypes);
    } catch (error) {
        next(error);
    }
}

export const create =  async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const productType = await productTypeService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            productTypeId:productType?.typeId
        });
    } catch (error) {
        next(error);
    }
}

export const update =  async (req:Request,res:Response,next:NextFunction) =>{
    const productTypeId = getParamNumber(req,'productTypeId');
    const {dto} = req.body;
    try {
        await productTypeService.update(productTypeId,dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove =  async (req:Request,res:Response,next:NextFunction) =>{
    const productTypeId = getParamNumber(req,'productTypeId');
    try {
        await productTypeService.remove(productTypeId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}