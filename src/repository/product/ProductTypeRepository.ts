import { ProductTypeCreateInput, ProductTypeUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

export const findAll = () => {
    return prisma.productType.findMany();
}

export const findById = (typeId:number) => {
    return prisma.productType.findUniqueOrThrow({
        where: {
            typeId
        }
    });
}

export const findByName = (name:string) => {
    return prisma.productType.findFirstOrThrow({
        where:{
            name:{
                contains:name
            }
        }
    });
}

export const create = (productType:ProductTypeCreateInput) => {
    return prisma.productType.create({
        data:productType
    });
}

export const update = (typeId:number,productType:ProductTypeUpdateInput) =>{
    return prisma.productType.update({
        where:{
            typeId
        },
        data:productType
    });
}

export const remove = (typeId:number) =>{
    return prisma.productType.delete({
        where:{
            typeId
        }
    });
}