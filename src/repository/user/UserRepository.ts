import { UserCreateInput, UserUncheckedCreateInput, UserUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

const include = {
    role:true,
    userProducts:true
}

export const findAll = () =>{
    return prisma.user.findMany({
        include
    });
}

export const findById = (id:number) =>{
    return prisma.user.findUniqueOrThrow({
        where:{
            userId:id
        },
        include
    });
}

export const findByEmail = (email:string) =>{
    return prisma.user.findUniqueOrThrow({
        where:{
            email
        },
        include
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