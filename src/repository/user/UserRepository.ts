import prisma from "../../models/common/prisma";

const include = {
    role:true
}

export const findById = (id:number) =>{
    return prisma.user.findUniqueOrThrow({
        where:{
            userId:id
        }
    });
}