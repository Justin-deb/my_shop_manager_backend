import { RoleCreateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

export const findAll = () =>{
    return prisma.role.findMany();
}

export const findById = (roleId:number) =>{
    return prisma.role.findUniqueOrThrow({
        where:{
            roleId
        }
    });
}

export const findByName = (name:string) =>{
    return prisma.role.findFirstOrThrow({
        where:{
            name:{
                contains:name
            }
        }
    });
}

export const create = (role:RoleCreateInput) =>{
    return prisma.role.create({
        data:role
    });
}

export const remove = (roleId:number) =>{
    return prisma.role.delete({
        where:{
            roleId
        }
    });
}