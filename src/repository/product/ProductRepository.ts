import { ProductCreateInput, ProductUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

const include = {
    productType:true,
    repairs:true,
    userProducts:true
}

export const findAll = () =>{
    return prisma.product.findMany({
        include
    });
}

export const findById = (id:number) =>{
    return prisma.product.findUniqueOrThrow({
        where:{
            productId:id
        },
        include
    });
}

export const findByName = (name:string) =>{
    return prisma.product.findMany({
        where:{
            name:{
                contains:name
            }
        },
        include
    });
}

export const findByProductionYear = (year:number) =>{
    return prisma.product.findMany({
        where:{
            productionYear:year
        },
        include
    });
}

export const findByModel = (model:string) =>{
    return prisma.product.findMany({
        where:{
            model:{
                contains:model
            }
        },
        include
    });
}

export const findByManufacturer = (manufacturer:string) =>{
    return prisma.product.findMany({
        where:{
            manufacturer:{
                contains:manufacturer
            }
        },
        include
    })
}

export const create = (product:ProductCreateInput) =>{
    return prisma.product.create({
        data:product
    });
}

export const deleteProduct = (id:number) =>{
    return prisma.product.delete({
        where:{
            productId:id
        }
    });
};

export const update = (id:number,product:ProductUpdateInput) =>{
    return prisma.product.update({
        where:{
            productId:id
        },
        data:product
    });
}