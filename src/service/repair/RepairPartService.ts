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
        mapPrismaError(error,'Repair Piece', `Shop Id:${shopId} Repair Id"${repairId} Piece Id"${pieceId}`);
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

export const update = (dto:UpdateRepairPartDto) =>{
    const newRepairPart:RepairPartUpdateInput = {
        quantity:dto.quantity,
        unitPrice:dto.unitPrice,
        addedAt:dto.addedAt
    }

    try {
        return repairPartRepository.update(dto.shopId,dto.repairId,dto.pieceId,newRepairPart);
    } catch (error) {
        mapPrismaError(error,'Repair Part',`Shop Id:${dto.shopId} Repair Id:${dto.repairId} Piece Id:${dto.pieceId}`);
    }
}

export const remove = (shopId:number,repairId:number,pieceId:number) =>{
    try {
        return repairPartRepository.remove(shopId,repairId,pieceId);
    } catch (error) {
        mapPrismaError(error,'Repair Part',`Shop Id:${shopId} Repair Id:${repairId} Piece Id:${pieceId}`);
    }
}