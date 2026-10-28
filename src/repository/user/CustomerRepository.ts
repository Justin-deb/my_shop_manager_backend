import { CustomerCreateInput, CustomerUpdateInput } from "../../generated/prisma/models.js";
import prisma from "../../models/common/prisma.js";

const include = {
    user:true
}

export const findAll = () =>{
    return prisma.customer.findMany({
        // include
    });
}

export const getShopIdByCustomerId = async (customerId:number) =>{
    const customer = await prisma.customer.findUniqueOrThrow({
        where:{
            customerId:customerId
        }
    });

    return customer.shopId;
}

export const findById = (shopId:number,customerId:number) =>{
    return prisma.customer.findUniqueOrThrow({
        where:{
            shopId,
            customerId
        },
        // include
    });
}

export const findByFullName = (shopId:number,firstName:string,lastName:string,secondLastName:string,middleName?:string) =>{
    return prisma.customer.findFirstOrThrow({
        where:{
            shopId,
            firstName,
            middleName,
            lastName,
            secondLastName
        },
        // include
    });
}

export const create = (customer:CustomerCreateInput) =>{
    return prisma.customer.create({
        data:customer
    });
}

export const update = (shopId:number,customerId:number,customer:CustomerUpdateInput) =>{
    return prisma.customer.update({
        where:{
            shopId,
            customerId
        },
        data:{
            customer
        }
    });
}

export const remove = (shopId:number,customerId:number) =>{
    return prisma.customer.delete({
        where:{
            shopId,
            customerId
        }
    });
}