import { CustomerProductCreateInput, CustomerProductUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

export const findById = (shopId:number,customerId:number,productId:number) =>{
    return prisma.customerProduct.findUniqueOrThrow({
        where:{
            shopId,
            productId_customerId:{
                customerId,
                productId
            }
        }
    });
}

export const findByCustomerId = (shopId:number,customerId:number) =>{
    return prisma.customerProduct.findMany({
        where:{
            shopId:shopId,
            customerId:customerId
            
        },
        include:{
            product:true
        }
    });
}

export const findByProductId = (shopId:number,productId:number) =>{
    return prisma.customerProduct.findMany({
        where:{
            shopId:shopId,
            productId:productId
        },
        include:{
            customer:true
        }
    });
}

export const create = (userProduct:CustomerProductCreateInput) =>{
    return prisma.customerProduct.create({
        data:userProduct
    })
}

export const update = (shopId:number,customerId:number,productId:number,customerProduct:CustomerProductUpdateInput) =>{
    return prisma.customerProduct.update({
        where:{
            shopId,
            productId_customerId:{
                customerId:customerId,
                productId
            }
        },
        data:customerProduct
    });
}

export const remove = (shopId:number,customerId:number,productId:number) =>{
    return prisma.customerProduct.delete({
        where:{
            shopId,
            productId_customerId:{
                customerId:customerId,
                productId
            }
        }
    });
}