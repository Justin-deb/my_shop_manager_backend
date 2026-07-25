import { StatusCreateInput, StatusUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

export const findAll = () =>{
    return prisma.status.findMany();
}

export const findById = (statusId:number) =>{
    return prisma.status.findUniqueOrThrow({
        where:{
            statusId
        }
    });
}

export const findByName = (name:string) =>{
    return prisma.status.findMany({
        where:{
            name:{
                contains:name
            }
        }
    });
}

export const create = (status:StatusCreateInput) =>{
    return prisma.status.create({
        data:status
    });
}

export const update = (statusId:number,status:StatusUpdateInput) =>{
    return prisma.status.update({
        where:{
            statusId
        },
        data:status
    });
}

export const remove = (statusId:number) =>{
    return prisma.status.delete({
        where:{
            statusId
        }
    });
}