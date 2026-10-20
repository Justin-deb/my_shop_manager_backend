import { UserRolesCreateInput, UserRolesUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

export const findAll = () =>{
    return prisma.userRoles.findMany({
        orderBy:{
            userId:'asc'
        }
    });
}

export const findAllRolesByUserId = (userId:number) =>{
    return prisma.userRoles.findMany({
        where:{
            userId
        }
    });
}

export const findAllUsersByRoleId = (roleId:number) =>{
    return prisma.userRoles.findMany({
        where:{
            roleId
        }
    });
}

export const userHasRole = async (userId:number,roleId:number) =>{
    try {
        const userRole = await prisma.userRoles.findUniqueOrThrow({
            where:{
                userId_roleId:{
                    userId,
                    roleId
                }
            }
        });

        if(userRole) return true;

    } catch (error) {
        return false;
    }
}

export const create = (userRole:UserRolesCreateInput) =>{
    return prisma.userRoles.create({
        data:userRole
    });
}

export const remove = (userId:number,roleId:number) =>{
    return prisma.userRoles.delete({
        where:{
            userId_roleId:{
                userId,
                roleId
            }
        }
    });
}