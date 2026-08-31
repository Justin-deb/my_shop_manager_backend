import { errorMonitor } from 'node:events';
import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreatePaymentDto } from '../../dto/payment/create/CreatePaymentDto';
import { PaymentCreateInput, PaymentUpdateInput } from '../../generated/prisma/models';
import * as paymentRepository from '../../repository/payment/PaymentRepository';

export const findAllByInvoiceId = (invoiceId:number) =>{
    return paymentRepository.findAllByInvoiceId(invoiceId);
}

export const findById = (id:number,invoiceId:number) =>{
    try {
        return paymentRepository.findById(id,invoiceId);
    } catch (error) {
        mapPrismaError(error,'Payment',id.toString());
    }
}

export const findByReference = (reference:string,invoiceId:number) =>{
    return paymentRepository.findByReference(reference,invoiceId);
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
        }
    }

    try {
        return paymentRepository.create(newPayment);
    } catch (error) {
        mapPrismaError(error,'Payment');
    }
}

export const update = () =>{
    //TODO Add the status field to payment and add this function to only modify the status
    throw new Error('Unimplemented method');
}

export const remove = (id:number) =>{
    try {
        return paymentRepository.remove(id);
    } catch (error) {
        mapPrismaError(error,'Payment',id.toString());
    }
}