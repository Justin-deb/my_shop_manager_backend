import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreatePaymentStatusDto } from '../../dto/payment/create/CreatePaymentStatusDto';
import { UpdatePaymentStatusDto } from '../../dto/payment/update/UpdatePaymentStatusDto';
import { PaymentStatusCreateInput } from '../../generated/prisma/models';
import * as paymentStatusRepository from '../../repository/payment/PaymentStatusRepository';

export const findAll = () =>{
    return paymentStatusRepository.findAll();
}

export const findById = (paymentStatusId:number) =>{
    try {
        return paymentStatusRepository.findById(paymentStatusId);
    } catch (error) {
        mapPrismaError(error,'Payment Status',paymentStatusId.toString());
    }
}

export const findByName = (name:string) =>{
    return paymentStatusRepository.findByName(name);
}

export const create = (dto:CreatePaymentStatusDto) =>{
    const newPaymentStatus:PaymentStatusCreateInput = {
        name:dto.name
    }

    try {
        return paymentStatusRepository.create(newPaymentStatus);
    } catch (error) {
        mapPrismaError(error,'Payment Status');
    }
}

export const update = (dto:UpdatePaymentStatusDto) =>{
    const newPaymentStatus:PaymentStatusCreateInput = {
        name:dto.name
    }

    try {
        return paymentStatusRepository.update(dto.paymentStatusId,newPaymentStatus);
    } catch (error) {
        mapPrismaError(error,'Payment Status',dto.paymentStatusId.toString());
    }
}

export const remove = (paymentStatusId:number) =>{
    try {
        return paymentStatusRepository.remove(paymentStatusId);
    } catch (error) {
        mapPrismaError(error,'Payment Status',paymentStatusId.toString());
    }
}