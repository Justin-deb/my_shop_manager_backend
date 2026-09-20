import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreateLaborDto } from '../../dto/repair/create/CreateLaborDto';
import { UpdateLaborDto } from '../../dto/repair/update/UpdateLaborDto';
import { LaborCreateInput, LaborUpdateInput } from '../../generated/prisma/models';
import * as laborRepository from '../../repository/repair/LaborRepository';

export const findById = (shopId:number,repairId:number,laborId:number) =>{
    try {
        return laborRepository.findById(shopId,repairId,laborId);
    } catch (error) {
        mapPrismaError(error,'Labor',laborId.toString());
    }
}

export const findAllByRepairId = (shopId:number,repairId:number) =>{
    return laborRepository.findAllByRepairId(shopId,repairId);
}

export const create = (dto:CreateLaborDto) =>{
    const newLabor:LaborCreateInput = {
        description:dto.description,
        hours:dto.hours,
        hourlyRate:dto.hourlyRate,
        performedAt:dto.performedAt,
        repair:{
            connect:{
                repairId:dto.repairId
            }
        }
    }

    try {
        return laborRepository.create(newLabor);
    } catch (error) {
        mapPrismaError(error,'Labor');
    }
}

export const update = (dto:UpdateLaborDto) =>{
    const newLabor: LaborUpdateInput = {
        description:dto.description,
        hours:dto.hours,
        hourlyRate:dto.hourlyRate,
        performedAt:dto.performedAt
    }

    try {
        return laborRepository.update(dto.shopId,dto.repairId,dto.laborId,newLabor);
    } catch (error) {
        mapPrismaError(error,'Labor',`Shop Id:${dto.shopId} Repair Id:${dto.repairId} Labor Id:${dto.laborId}`);
    }
}

export const remove = (shopId:number,repairId:number,laborId:number) =>{
    try {
        return laborRepository.remove(shopId,repairId,laborId);
    } catch (error) {
        mapPrismaError(error,'Labor',`Shop Id:${shopId} Repair Id:${repairId} Labor Id:${laborId}`);
    }
}