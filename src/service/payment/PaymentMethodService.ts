import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreatePaymentMethodDto } from '../../dto/payment/create/CreatePaymentMethodDto';
import { UpdatePaymentMethodDto } from '../../dto/payment/update/UpdatePaymentMethodDto';
import { PaymentMethodCreateInput, PaymentMethodUpdateInput } from '../../generated/prisma/models';
import * as paymentMethodRepository from '../../repository/payment/PaymentMethodRepository';

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

export const update = (dto:UpdatePaymentMethodDto) =>{
    const newPaymentMethod:PaymentMethodUpdateInput = {
        name:dto.name
    }

    try {
        return paymentMethodRepository.update(dto.id,newPaymentMethod);
    } catch (error) {
        mapPrismaError(error,'Payment Method',dto.id.toString());
    }
}

export const remove = (id:number) =>{
    try {
        return paymentMethodRepository.remove(id);
    } catch (error) {
        mapPrismaError(error,'Payment Method',id.toString());
    }
}