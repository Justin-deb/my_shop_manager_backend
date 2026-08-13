import { ShopCreateInput, ShopUpdateInput } from '../../generated/prisma/models';
import prisma from '../../models/common/prisma';

const include = {
  employees: true,
  repairs: true,
  warehouses: true,
};

export const findAll = () => {
  return prisma.shop.findMany({include});
};

export const findById = (shopId: number) => {
  return prisma.shop.findUniqueOrThrow({
    where: {
      shopId,
    },
    include
  });
};

export const findByOwnerId = (ownerId:number) =>{
    return prisma.shop.findMany({
        where:{
            ownerId
        },
        include
    });
}

export const create = (shop:ShopCreateInput) =>{
    return prisma.shop.create({
        data:shop
    });
}

export const update = (shopId:number,shop:ShopUpdateInput) =>{
    return prisma.shop.update({
        where:{
            shopId
        },
        data:shop
    });
}

export const remove = (shopId:number) =>{
    return prisma.shop.delete({
        where:{
            shopId
        }
    });
}