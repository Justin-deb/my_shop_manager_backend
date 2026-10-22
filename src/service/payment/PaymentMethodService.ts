import { mapPrismaError } from "../../common/utils/ErrorWrapper.js";
import { CreatePaymentMethodDto } from "../../dto/payment/create/CreatePaymentMethodDto.js";
import { UpdatePaymentMethodDto } from "../../dto/payment/update/UpdatePaymentMethodDto.js";
import { PaymentMethodCreateInput, PaymentMethodUpdateInput } from "../../generated/prisma/models.js";
import * as paymentMethodRepository from "../../repository/payment/PaymentMethodRepository.js";

export const findAll = () =>{
    return paymentMethodRepository.findAll();
}

export const findById = (paymentMethodId:number) =>{
    try {
        return paymentMethodRepository.findById(paymentMethodId);
    } catch (error) {
        mapPrismaError(error,'Payment Method',paymentMethodId.toString());
    }
}

export const findByName = (name:string) =>{
    return paymentMethodRepository.findByName(name);
}

export const create = (dto:CreatePaymentMethodDto) =>{
    const newPaymentMethod:PaymentMethodCreateInput = {
        name:dto.name
    }

    try {
        return paymentMethodRepository.create(newPaymentMethod);
    } catch (error) {
        mapPrismaError(error,'Payment Method');
    }
}

export const update = (paymentMethodId:number,dto:UpdatePaymentMethodDto) =>{
    const newPaymentMethod:PaymentMethodUpdateInput = {
        name:dto.name
    }

    try {
        return paymentMethodRepository.update(paymentMethodId,newPaymentMethod);
    } catch (error) {
        mapPrismaError(error,'Payment Method',paymentMethodId.toString());
    }
}

export const remove = (id:number) =>{
    try {
        return paymentMethodRepository.remove(id);
    } catch (error) {
        mapPrismaError(error,'Payment Method',id.toString());
    }
}