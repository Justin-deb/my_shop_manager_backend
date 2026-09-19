import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreateStatusDto } from '../../dto/repair/create/CreateStatusDto';
import { UpdateStatusDto } from '../../dto/repair/update/UpdateStatusDto';
import { StatusCreateInput, StatusUpdateInput } from '../../generated/prisma/models';
import * as statusRepository from '../../repository/repair/StatusRepository';

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

export const update = (dto:UpdateStatusDto) =>{
    const newStatus:StatusUpdateInput = {
        name:dto.name
    }

    try {
        return statusRepository.update(dto.statusId,newStatus);
    } catch (error) {
        mapPrismaError(error,'Status',dto.statusId.toString());
    }
}

export const remove = (statusId:number) =>{
    try {
        return statusRepository.remove(statusId);
    } catch (error) {
        mapPrismaError(error,'Status',statusId.toString());
    }
}