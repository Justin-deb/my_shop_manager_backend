import { errorMonitor } from 'node:events';
import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreateRepairPartDto } from '../../dto/repair/create/CreateRepairPartDto';
import { RepairPartCreateInput, RepairPartUpdateInput } from '../../generated/prisma/models';
import * as repairPartRepository from '../../repository/repair/RepairPartRepository';
import { UpdateRepairPartDto } from '../../dto/repair/update/UpdateRepairPartDto';

export const findAllByRepairId = (shopId:number,repairId:number) =>{
    return repairPartRepository.findAllByRepairId(shopId,repairId);
}

export const findById = (shopId:number,repairId:number,pieceId:number) =>{
    try {
        return repairPartRepository.findById(shopId,repairId,pieceId);
    } catch (error) {
        mapPrismaError(error,'Repair Piece',pieceId.toString());
    }
}

export const create = (dto:CreateRepairPartDto) =>{
    const newRepairPart:RepairPartCreateInput = {
        quantity:dto.quantity,
        unitPrice:dto.unitPrice,
        addedAt:dto.addedAt,
        repair:{
            connect:{
                repairId:dto.repairId
            }
        },
        piece:{
            connect:{
                pieceId:dto.pieceId
            }
        }
    }

    try {
        return repairPartRepository.create(newRepairPart);
    } catch (error) {
        mapPrismaError(error,'Repair Part');
    }
}

export const update = (shopId:number,repairId:number,pieceId:number,dto:UpdateRepairPartDto) =>{
    const newRepairPart:RepairPartUpdateInput = {
        quantity:dto.quantity,
        unitPrice:dto.unitPrice,
        addedAt:dto.addedAt
    }

    try {
        return repairPartRepository.update(shopId,repairId,pieceId,newRepairPart);
    } catch (error) {
        mapPrismaError(error,'Repair Part',pieceId.toString());
    }
}

export const remove = (shopId:number,repairId:number,pieceId:number) =>{
    try {
        return repairPartRepository.remove(shopId,repairId,pieceId);
    } catch (error) {
        mapPrismaError(error,'Repair Part',pieceId.toString());
    }
}