import { WarehouseCreateInput, WarehouseUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

const include = {
    piece:true
}

export const findAllByShopId = (shopId:number) => {
    return prisma.warehouse.findMany({
        where:{
            shopId
        },
        include
    });
}

export const create = (warehouse:WarehouseCreateInput) =>{
    return prisma.warehouse.create({
        data:warehouse
    });
}

export const update = (shopId:number,pieceId:number,warehouse:WarehouseUpdateInput) =>{
    return prisma.warehouse.update({
        where:{
            shopId_pieceId:{
                shopId,
                pieceId
            }
        },data:warehouse
    });
}

export const remove = (shopId:number,pieceId:number) =>{
    return prisma.warehouse.delete({
        where:{
            shopId_pieceId:{
                shopId,
                pieceId
            }
        }
    });
}