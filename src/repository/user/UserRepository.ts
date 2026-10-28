import { UserCreateInput, UserUncheckedCreateInput, UserUpdateInput } from "../../generated/prisma/models.js";
import prisma from "../../models/common/prisma.js";

const include = {
    userRoles:true
}

export const findAll = () =>{
    return prisma.user.findMany({
        omit:{passwordHash:true}
    });
}

export const findById = (userId:number) =>{
    return prisma.user.findUniqueOrThrow({
        where:{
            userId
        },
        // include
    });
}

export const findPasswordById = async (userId:number) =>{
    const user = await prisma.user.findUniqueOrThrow({
        where:{
            userId
        },
        // include
    });

    return user.passwordHash;
}

export const findByEmail = (email:string) =>{
    return prisma.user.findUniqueOrThrow({
        where:{
            email
        },omit:{passwordHash:true}
        // include
    });
}

export const create = (user:UserCreateInput) =>{
    return prisma.user.create({
        data:user
    });
}

export const update = (userId:number,user:UserUpdateInput) =>{
    return prisma.user.update({
        where:{
            userId
        },
        data:user
    });
}

export const remove = (userId:number) =>{
    return prisma.user.delete({
        where:{
            userId
        }
    });
}