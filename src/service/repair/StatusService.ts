import { mapPrismaError } from "../../common/utils/ErrorWrapper.js";
import { CreateStatusDto } from "../../dto/repair/create/CreateStatusDto.js";
import { UpdateStatusDto } from "../../dto/repair/update/UpdateStatusDto.js";
import { StatusCreateInput, StatusUpdateInput } from "../../generated/prisma/models.js";
import * as statusRepository from "../../repository/repair/StatusRepository.js";

export const findAll = () =>{
    return statusRepository.findAll();
}

export const findById = (statusId:number) =>{
    try {
        return statusRepository.findById(statusId);
    } catch (error) {
        mapPrismaError(error,'Status',statusId.toString());
    }
}

export const findByName = (name:string) =>{
    return statusRepository.findByName(name);
}

export const create = (dto:CreateStatusDto) =>{
    const newStatus:StatusCreateInput = {
        name:dto.name
    }

    try {
        return statusRepository.create(newStatus);
    } catch (error) {
        mapPrismaError(error,'Status');
    }
}

export const update = (statusId:number,dto:UpdateStatusDto) =>{
    const newStatus:StatusUpdateInput = {
        name:dto.name
    }

    try {
        return statusRepository.update(statusId,newStatus);
    } catch (error) {
        mapPrismaError(error,'Status',statusId.toString());
    }
}

export const remove = (statusId:number) =>{
    try {
        return statusRepository.remove(statusId);
    } catch (error) {
        mapPrismaError(error,'Status',statusId.toString());
    }
}