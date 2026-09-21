import { PaymentStatusCreateInput, PaymentStatusUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

export const findAll = () =>{
    return prisma.paymentStatus.findMany();
}

export const findById = (paymentStatusId:number) =>{
    return prisma.paymentStatus.findUniqueOrThrow({
        where:{
            paymentStatusId
        }
    });
}

export const findByName = (name:string) =>{
    return prisma.paymentStatus.findMany({
        where:{
            name:{
                contains:name
            }
        }
    });
}

export const create = (paymentStatus:PaymentStatusCreateInput) =>{
    return prisma.paymentStatus.create({
        data:paymentStatus
    });
}

export const update = (paymentStatusId:number,paymentStatus:PaymentStatusUpdateInput) =>{
    return prisma.paymentStatus.update({
        where:{
            paymentStatusId
        },
        data:paymentStatus
    });
}

export const remove = (paymentStatusId:number) =>{
    return prisma.paymentStatus.delete({
        where:{
            paymentStatusId
        }
    });
}