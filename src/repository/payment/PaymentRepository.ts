import { PaymentCreateInput, PaymentUpdateInput } from '../../generated/prisma/models';
import prisma from '../../models/common/prisma';

const include = {
  paymentMethod: true,
};

export const findAllByInvoiceId = (shopId:number,invoiceId: number) => {
  return prisma.payment.findMany({
    where: {
        invoice:{
            shopId,
            invoiceId
        }
    },
    include
  });
};

export const findById = (shopId:number,invoiceId:number,paymentId:number) =>{
    return prisma.payment.findUniqueOrThrow({
        where:{
            invoice:{
                shopId,
                invoiceId
            },
            paymentId
        },
        include
    });
}

export const findByReference = (shopId:number,invoiceId:number,reference:string) =>{
    return prisma.payment.findMany({
        where:{
            invoice:{
                shopId,
                invoiceId
            },
            reference,
        },
        include
    });
}

export const create = (payment:PaymentCreateInput) =>{
    return prisma.payment.create({
        data:payment
    });
}

export const update = (shopId:number,invoiceId:number,paymentId:number,payment:PaymentUpdateInput) =>{
    return prisma.payment.update({
        where:{
            invoice:{
                repair:{
                    shopId
                },
                invoiceId
            },
            paymentId
        },
        data:payment
    });
}

export const remove = (shopId:number,invoiceId:number,paymentId:number) =>{
    return prisma.payment.delete({
        where:{
            invoice:{
                repair:{
                    shopId
                },
                invoiceId
            },
            paymentId
        }
    });
}