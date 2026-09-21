import HttpStatusCodes from '../../common/constants/HttpStatusCodes';
import { controllerResponse } from '../../common/utils/ControllerResponse';
import * as assignmentService from '../../service/repair/AssignmentService';
import { NextFunction, Request,Response } from 'express';

export const findAllByRepairId = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,repairId} = req.body;
    try {
        const assignments = await assignmentService.findAllByRepairId(shopId,repairId);
        
        return controllerResponse(res,HttpStatusCodes.OK,assignments);
    } catch (error) {
        next(error);
    }
}

export const findAllActiveByShopId = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId} = req.body

    try {
        const assignments = await assignmentService.findAllActiveByShopId(shopId);

        return controllerResponse(res,HttpStatusCodes.OK,assignments);
    } catch (error) {
        next(error);
    }
}

export const findAllByEmployeeId = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,employeeId} = req.body;

    try {
        const assignments = await assignmentService.findAllByEmployeeId(shopId,employeeId);

        return controllerResponse(res,HttpStatusCodes.OK,assignments);
    } catch (error) {
        next(error);
    }
}

export const findById = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,id} = req.body;
    try {
        const assignment = await assignmentService.findById(shopId,id);

        return controllerResponse(res,HttpStatusCodes.OK,assignment);
    } catch (error) {
        next(error);
    }
}

export const create = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        const assignment = await assignmentService.create(dto);

        return controllerResponse(res,HttpStatusCodes.CREATED,{
            assignmentId:assignment?.assignmentId
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req:Request,res:Response,next:NextFunction) =>{
    const {dto} = req.body;
    try {
        await assignmentService.update(dto);

        return controllerResponse(res,HttpStatusCodes.OK,'Updated successfully');
    } catch (error) {
        next(error);
    }
}

export const remove = async (req:Request,res:Response,next:NextFunction) =>{
    const {shopId,assignmentId} = req.body;
    try {
        await assignmentService.remove(shopId,assignmentId);

        return controllerResponse(res,HttpStatusCodes.NO_CONTENT,'Deleted successfully');
    } catch (error) {
        next(error);
    }}