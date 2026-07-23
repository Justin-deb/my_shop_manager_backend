import { InvoiceCreateInput, InvoiceUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

const include = {
    payments:true,
    repair:true
}

export const findAllByRepairId = (repairId:number) =>{
    return prisma.invoice.findMany({
        where:{
            repairId
        },
        include
    });
}

export const findById = (invoiceId:number) =>{
    return prisma.invoice.findUniqueOrThrow({
        where:{
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

export const update = (invoiceId:number,invoice:InvoiceUpdateInput) =>{
    return prisma.invoice.update({
        where:{
            invoiceId
        },
        data:invoice
    });
}

export const remove = (invoiceId:number) =>{
    return prisma.invoice.delete({
        where:{
            invoiceId
        }
    });
}