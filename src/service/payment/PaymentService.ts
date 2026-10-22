import { mapPrismaError } from "../../common/utils/ErrorWrapper.js";
import { CreatePaymentDto } from "../../dto/payment/create/CreatePaymentDto.js";
import { PaymentCreateInput, PaymentUpdateInput } from "../../generated/prisma/models.js";
import * as paymentRepository from "../../repository/payment/PaymentRepository.js";
import { UpdatePaymentDto } from "../../dto/payment/update/UpdatePaymentDto.js";

export const findAllByInvoiceId = (shopId:number,invoiceId:number) =>{
    return paymentRepository.findAllByInvoiceId(shopId,invoiceId);
}

export const findById = (shopId:number,invoiceId:number,paymentId:number) =>{
    try {
        return paymentRepository.findById(shopId,invoiceId,paymentId);
    } catch (error) {
        mapPrismaError(error,'Payment',paymentId.toString());
    }
}

export const findByReference = (shopId:number,invoiceId:number,reference:string) =>{
    return paymentRepository.findByReference(shopId,invoiceId,reference);
}

export const create = (dto:CreatePaymentDto) =>{
    const newPayment:PaymentCreateInput ={
        paymentDate:dto.paymentDate,
        amount:dto.amount,
        reference:dto.reference,
        invoice:{
            connect:{
                invoiceId:dto.invoiceId
            }
        },
        paymentMethod:{
            connect:{
                paymentMethodId:dto.paymentMethodId
            }
        },
        paymentStatus:{
            connect:{
                paymentStatusId:dto.paymentStatusId
            }
        }
    }

    try {
        return paymentRepository.create(newPayment);
    } catch (error) {
        mapPrismaError(error,'Payment');
    }
}

export const update = (shopId:number,invoiceId:number,paymentId:number,dto:UpdatePaymentDto) =>{
    const newPayment:PaymentUpdateInput = {
        paymentStatus:{
            connect:{
                paymentStatusId:dto.statusId
            }
        }
    }

    try {
        return paymentRepository.update(shopId,invoiceId,paymentId,newPayment);
    } catch (error) {
        mapPrismaError(error,'Payment',paymentId.toString());
    }
}

export const remove = (shopId:number,invoiceId:number,paymentId:number) =>{
    try {
        return paymentRepository.remove(shopId,invoiceId,paymentId);
    } catch (error) {
        mapPrismaError(error,'Payment',paymentId.toString());
    }
}