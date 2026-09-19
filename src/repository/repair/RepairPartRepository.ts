import { RepairPartCreateInput, RepairPartUpdateInput } from '../../generated/prisma/models';
import prisma from '../../models/common/prisma';

const include = {
  piece: true,
};

export const findAllByRepairId = (shopId:number,repairId:number) => {
  return prisma.repairPart.findMany({
    where: {
      repair:{
        shopId,
        repairId
      }
    },
    include
  });
};

export const findById = (shopId:number,repairId:number,pieceId:number) =>{
    return prisma.repairPart.findUniqueOrThrow({
        where:{
            repairId_pieceId:{
                pieceId,
                repairId
            },repair:{
                shopId
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

export const update = (shopId:number,repairId:number,pieceId:number,repairPart:RepairPartUpdateInput) =>{
    return prisma.repairPart.update({
        where:{
            repairId_pieceId:{
                pieceId,
                repairId
            },repair:{
                shopId
            }
        },
        data:repairPart
    });
}

export const remove = (shopId:number,repairId:number,pieceId:number) =>{
    return prisma.repairPart.delete({
        where:{
            repairId_pieceId:{
                pieceId,
                repairId
            },repair:{
                shopId
            }
        }
    });
}