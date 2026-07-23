import { PaymentMethodCreateInput, PaymentMethodUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

export const findAll = () =>{
    return prisma.paymentMethod.findMany();
}

export const findById = (paymentMethodId:number) =>{
    return prisma.paymentMethod.findUniqueOrThrow({
        where:{
            paymentMethodId
        }
    });
}

export const findByName = (name:string) =>{
    return prisma.paymentMethod.findMany({
        where:{
            name:{
                contains:name
            }
        }
    });
}

export const create = (paymentMethod:PaymentMethodCreateInput) =>{
    return prisma.paymentMethod.create({
        data:paymentMethod
    });
}

export const update = (paymentMethodId:number,paymentMethod:PaymentMethodUpdateInput) =>{
    return prisma.paymentMethod.update({
        where:{
            paymentMethodId
        },
        data:paymentMethod
    });
}

export const remove = (paymentMethodId:number) =>{
    return prisma.paymentMethod.delete({
        where:{
            paymentMethodId
        }
    });
}