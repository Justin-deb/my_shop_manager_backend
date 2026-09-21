import { RepairCreateInput, RepairUpdateInput } from '../../generated/prisma/models';
import prisma from '../../models/common/prisma';

const include = {
  assignments: true,
  invoice: true,
  labourEntries: true,
  product: true,
  repairParts: true,
  status: true,
};

export const getShopIdByRepairId = async (repairId:number) =>{
    const repair = await prisma.repair.findUniqueOrThrow({
        where:{
            repairId
        }
    });

    return repair.shopId;
}

export const findAllByShopId = (shopId: number) => {
  return prisma.repair.findMany({
    where: {
      shopId,
    },
    include
  });
};

export const findByRepairId = (shopId:number,repairId:number) =>{
    return prisma.repair.findUniqueOrThrow({
        where:{
            shopId,
            repairId
        },
        include
    });
}

export const findAllByStatusId = (shopId:number,statusId:number) =>{
    return prisma.repair.findMany({
        where:{
            shopId,
            statusId
        },
        include
    });
}

export const findAllByCustomerId = (shopId:number,customerId:number) =>{
    return prisma.repair.findMany({
        where:{
            shopId,
            customerId
        },
        include
    });
}

export const create = (repair:RepairCreateInput) =>{
    return prisma.repair.create({
        data:repair
    });
}

export const update = (shopId:number,repairId:number,repair:RepairUpdateInput) =>{
    return prisma.repair.update({
        where:{
            shopId,
            repairId
        },
        data:repair
    });
}

export const remove = (shopId:number,repairId:number) =>{
    return prisma.repair.delete({
        where:{
            shopId,
            repairId
        }
    });
}