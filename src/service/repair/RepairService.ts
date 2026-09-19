import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreateRepairDto } from '../../dto/repair/create/CreateRepairDto';
import { UpdateRepairDto } from '../../dto/repair/update/UpdateRepairDto';
import { RepairCreateInput, RepairUpdateInput } from '../../generated/prisma/models';
import * as repairRepository from '../../repository/repair/RepairRepository';

export const validateShopId = async (repairId:number,shopId:number) =>{
    try {
        const repairShopId = await repairRepository.getShopIdByRepairId(shopId);
        
        return shopId === repairShopId;
    } catch (error) {
        mapPrismaError(error,'Repair',repairId.toString());
    }
}

export const findAllByShopId = (shopId:number) =>{
    return repairRepository.findAllByShopId(shopId);
}

export const findByRepairId = (shopId:number,repairId:number) =>{
    try {
        return repairRepository.findByRepairId(shopId,repairId);
    } catch (error) {
        mapPrismaError(error,'Repair',repairId.toString());
    }
}

export const findAllByStatusId = (shopId:number,statusId:number) =>{
    return repairRepository.findAllByStatusId(shopId,statusId);
}

export const findAllByCustomerId = (customerId:number) =>{
    return repairRepository.findAllByCustomerId(customerId);
}

export const create = (dto:CreateRepairDto) =>{
    const newRepair:RepairCreateInput = {
        estimatedHours:dto.estimatedHours,
        workedHours:dto.workedHours,
        receivedDate:dto.receivedDate,
        finishDate:dto.finishDate,
        returnDate:dto.returnDate,
        notes:dto.notes,
        problemDescription:dto.notes,
        product:{
            connect:{
                productId:dto.productId
            }
        },
        shop:{
            connect:{
                shopId:dto.shopId
            }
        },
        status:{
            connect:{
                statusId:dto.statusId
            }
        },
        customerProduct:{
            connect:{
                productId_customerId:{
                    customerId:dto.customerId,
                    productId:dto.productId
                }
            }
        }
    }

    try {
        return repairRepository.create(newRepair);
    } catch (error) {
        mapPrismaError(error,'Repair')
    }
}

export const update = (dto:UpdateRepairDto) =>{
    const newRepair:RepairUpdateInput = {
        estimatedHours:dto.estimatedHours,
        workedHours:dto.workedHours,
        receivedDate:dto.receivedDate,
        finishDate:dto.finishDate,
        returnDate:dto.returnDate,
        notes:dto.notes,
        problemDescription:dto.notes,
        status:{
            connect:{
                statusId:dto.statusId
            }
        }
    }

    try {
        return repairRepository.update(dto.shopId,dto.repairId,newRepair);
    } catch (error) {
        mapPrismaError(error,'Repair',dto.repairId.toString());
    }
}

export const remove = (shopId:number,repairId:number) =>{
    try {
        return repairRepository.remove(shopId,repairId);
    } catch (error) {
        mapPrismaError(error,'Repair',repairId.toString());
    }
}