import { LaborCreateInput, LaborUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

export const findById = (shopId:number,repairId:number,laborId:number) =>{
    return prisma.labor.findUniqueOrThrow({
        where:{
            repair:{
                shopId,
                repairId
            },
            laborId
        }
    });
}

export const findAllByRepairId = (shopId:number,repairId:number) =>{
    return prisma.labor.findMany({
        where:{
            repair:{
                shopId,
                repairId
            }
        }
    });
}

export const create = (labor:LaborCreateInput) =>{
    return prisma.labor.create({
        data:labor
    });
}

export const update = (shopId:number,repairId:number,laborId:number,labor:LaborUpdateInput) =>{
    return prisma.labor.update({
        where:{
            repair:{
                shopId,
                repairId
            },
            laborId
        },
        data:labor
    });
}

export const remove = (shopId:number,repairId:number,laborId:number) =>{
    return prisma.labor.delete({
        where:{
            repair:{
                shopId,
                repairId
            },
            laborId
        }
    });
}