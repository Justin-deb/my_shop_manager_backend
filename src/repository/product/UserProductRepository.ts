import { UserProduct } from "../../generated/prisma/client";
import { UserProductUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

export const findByUserId = (userId:number) =>{
    return prisma.userProduct.findMany({
        where:{
            customerId:userId,
            
        },
        include:{
            product:true
        }
    });
}

export const findByProductId = (productId:number) =>{
    return prisma.userProduct.findMany({
        where:{
            productId:productId
        },
        include:{
            customer:true
        }
    });
}

export const create = (userProduct:UserProduct) =>{
    return prisma.userProduct.create({
        data:userProduct
    })
}

export const update = (userId:number,productId:number,userProduct:UserProductUpdateInput) =>{
    return prisma.userProduct.update({
        where:{
            productId_customerId:{
                customerId:userId,
                productId
            }
        },
        data:userProduct
    });
}

export const remove = (userId:number,productId:number) =>{
    return prisma.userProduct.delete({
        where:{
            productId_customerId:{
                customerId:userId,
                productId
            }
        }
    });
}