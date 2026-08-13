import { PaymentCreateInput, PaymentUpdateInput } from '../../generated/prisma/models';
import prisma from '../../models/common/prisma';

const include = {
  paymentMethod: true,
};

export const findAllByInvoiceId = (invoiceId: number) => {
  return prisma.payment.findMany({
    where: {
      invoiceId,
    },
    include
  });
};

export const findById = (paymentId:number) =>{
    return prisma.payment.findUniqueOrThrow({
        where:{
            paymentId
        },
        include
    });
}

export const findByReference = (reference:string,invoiceId:number) =>{
    return prisma.payment.findMany({
        where:{
            reference,
            invoiceId
        },
        include
    });
}

export const create = (payment:PaymentCreateInput) =>{
    return prisma.payment.create({
        data:payment
    });
}

export const update = (paymentId:number,payment:PaymentUpdateInput) =>{
    return prisma.payment.update({
        where:{
            paymentId
        },
        data:payment
    });
}

export const remove = (paymentId:number) =>{
    return prisma.payment.delete({
        where:{
            paymentId
        }
    });
}