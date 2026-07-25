import { LaborCreateInput, LaborUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

export const findById = (repairId:number,laborId:number) =>{
    return prisma.labor.findMany({
        where:{
            repairId,
            laborId
        }
    });
}

export const create = (labor:LaborCreateInput) =>{
    return prisma.labor.create({
        data:labor
    });
}

export const update = (repairId:number,laborId:number,labor:LaborUpdateInput) =>{
    return prisma.labor.update({
        where:{
            repairId,
            laborId
        },
        data:labor
    });
}

export const remove = (repairId:number,laborId:number) =>{
    return prisma.labor.delete({
        where:{
            repairId,
            laborId
        }
    });
}