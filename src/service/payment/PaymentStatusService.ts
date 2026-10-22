import { mapPrismaError } from "../../common/utils/ErrorWrapper.js";
import { CreatePaymentStatusDto } from "../../dto/payment/create/CreatePaymentStatusDto.js";
import { UpdatePaymentStatusDto } from "../../dto/payment/update/UpdatePaymentStatusDto.js";
import { PaymentStatusCreateInput } from "../../generated/prisma/models.js";
import * as paymentStatusRepository from "../../repository/payment/PaymentStatusRepository.js";

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

export const update = (paymentStatusId:number,dto:UpdatePaymentStatusDto) =>{
    const newPaymentStatus:PaymentStatusCreateInput = {
        name:dto.name
    }

    try {
        return paymentStatusRepository.update(paymentStatusId,newPaymentStatus);
    } catch (error) {
        mapPrismaError(error,'Payment Status',paymentStatusId.toString());
    }
}

export const remove = (paymentStatusId:number) =>{
    try {
        return paymentStatusRepository.remove(paymentStatusId);
    } catch (error) {
        mapPrismaError(error,'Payment Status',paymentStatusId.toString());
    }
}