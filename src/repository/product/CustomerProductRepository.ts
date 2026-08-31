import { CustomerProductCreateInput, CustomerProductUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

export const findByCustomerId = (customerId:number,shopId:number) =>{
    return prisma.customerProduct.findMany({
        where:{
            customerId:customerId,
            shopId:shopId
            
        },
        include:{
            product:true
        }
    });
}

export const findByProductId = (productId:number,shopId:number) =>{
    return prisma.customerProduct.findMany({
        where:{
            productId:productId,
            shopId:shopId
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

export const update = (customerId:number,productId:number,customerProduct:CustomerProductUpdateInput) =>{
    return prisma.customerProduct.update({
        where:{
            productId_customerId:{
                customerId:customerId,
                productId
            }
        },
        data:customerProduct
    });
}

export const remove = (customerId:number,productId:number) =>{
    return prisma.customerProduct.delete({
        where:{
            productId_customerId:{
                customerId:customerId,
                productId
            }
        }
    });
}