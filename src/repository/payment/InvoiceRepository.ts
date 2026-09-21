import { InvoiceCreateInput, InvoiceUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

const include = {
    payments:true,
    repair:true
}

export const findAllByRepairId = (shopId:number,repairId:number) =>{
    return prisma.invoice.findMany({
        where:{
            repair:{
                shopId,
                repairId
            }
        },
        include
    });
}

export const findById = (shopId:number,invoiceId:number) =>{
    return prisma.invoice.findUniqueOrThrow({
        where:{
            repair:{
                shopId
            },
            invoiceId
        },
        include
    });
}

export const create = (invoice:InvoiceCreateInput) =>{
    return prisma.invoice.create({
        data:invoice
    });
}

export const update = (shopId:number,invoiceId:number,invoice:InvoiceUpdateInput) =>{
    return prisma.invoice.update({
        where:{
            repair:{
                shopId
            },
            invoiceId
        },
        data:invoice
    });
}

export const remove = (shopId:number,invoiceId:number) =>{
    return prisma.invoice.delete({
        where:{
            repair:{
                shopId
            },
            invoiceId
        }
    });
}