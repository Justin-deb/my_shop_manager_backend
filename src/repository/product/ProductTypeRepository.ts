import { ProductTypeCreateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

export const findAll = () => {
    return prisma.productType.findMany();
}

export const findById = (id:number) => {
    return prisma.productType.findUniqueOrThrow({
        where: {
            typeId:id
        }
    });
}

export const findByName = (name:string) => {
    return prisma.productType.findMany({
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

export const deleteType = (id:number) =>{
    return prisma.productType.delete({
        where:{
            typeId:id
        }
    });
}