import { PositionUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

export const findAll = () =>{
    return prisma.position.findMany();
}

export const findById = (positionId:number) =>{
    return prisma.position.findUniqueOrThrow({
        where:{
            positionId
        }
    });
}

export const findByName = (name:string) =>{
    return prisma.position.findMany({
        where:{
            name:{
                contains:name
            }
        }
    });
}

export const update = (positionId:number,position:PositionUpdateInput) =>{
    return prisma.position.update({
        where:{
            positionId
        },data:position
    });
}

export const remove = (positionId:number) =>{
    return prisma.position.delete({
        where:{
            positionId
        }
    });
}