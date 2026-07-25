import { RepairPartCreateInput, RepairPartUpdateInput } from '../../generated/prisma/models';
import prisma from '../../models/common/prisma';

const include = {
  piece: true,
};

export const findAllByRepairId = (repairId: number) => {
  return prisma.repairPart.findMany({
    where: {
      repairId,
    },
    include
  });
};

export const findById = (repairId:number,pieceId:number) =>{
    return prisma.repairPart.findUniqueOrThrow({
        where:{
            repairId_pieceId:{
                pieceId,
                repairId
            }
        },
        include
    });
}

export const create = (repairPart:RepairPartCreateInput) =>{
    return prisma.repairPart.create({
        data:repairPart
    });
}

export const update = (repairId:number,pieceId:number,repairPart:RepairPartUpdateInput) =>{
    return prisma.repairPart.update({
        where:{
            repairId_pieceId:{
                repairId,
                pieceId
            }
        },
        data:repairPart
    });
}

export const remove = (repairId:number,pieceId:number) =>{
    return prisma.repairPart.delete({
        where:{
            repairId_pieceId:{
                repairId,
                pieceId
            }
        }
    });
}