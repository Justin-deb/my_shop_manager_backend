import { Request,Response,NextFunction } from 'express';
import * as productService from '../../service/product/ProductService';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import HttpStatusCodes from '../../common/constants/HttpStatusCodes';

export const findAll = async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const products = await productService.findAll();
        return controllerResponse(res,HttpStatusCodes.OK,products);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const {productId} = req.body;
    try {
        const product = await productService.findById(productId);
        return controllerResponse(res,HttpStatusCodes.OK,product);
    } catch (error) {
        next(error);
    }
}

export const findByName = async (req:Request,res:Response,next:NextFunction) =>{
    const {name} = req.body;
    try {
        const products = await productService.findByName(name);
        return controllerResponse(res,HttpStatusCodes.OK,products);
    } catch (error) {
        next(error);
    }
}

export const findByProductionYear = async (req:Request,res:Response,next:NextFunction) =>{
    const {productionYear} = req.body;
    try {
        const products = await productService.findByProductionYear(productionYear);
        return controllerResponse(res,HttpStatusCodes.OK,products);
    } catch (error) {
        next(error);
    }
}

export const findByModel = async (req:Request,res:Response,next:NextFunction) =>{
    const {model} = req.body;
    try {
        const products = await productService.findByModel(model);
        return controllerResponse(res,HttpStatusCodes.OK,products);
    } catch (error) {
        next(error);
    }
}

export const findByManufacturer = async (req:Request,res:Response,next:NextFunction) =>{
    const {manufacturer} = req.body;
    try {
        const products = await productService.findByManufacturer(manufacturer);
        return controllerResponse(res,HttpStatusCodes.OK,products);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const product = await productService.create(dto);
        return controllerResponse(res,HttpStatusCodes.CREATED,{
            productId:product?.productId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        await productService.update(dto);
        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const {productId} = req.body;
    try {
        await productService.remove(productId);
        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }
}