import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { FullNameCustomerDto } from '../../dto/user/common/FullNameCustomerDto';
import { CreateCustomerDto } from '../../dto/user/create/CreateCustomerDto';
import { UpdateCustomerDto } from '../../dto/user/update/UpdateCustomerDto';
import { CustomerCreateInput, CustomerUpdateInput } from '../../generated/prisma/models';
import * as customerRepository from '../../repository/user/CustomerRepository';

export const findAll = () =>{
    return customerRepository.findAll();
}

export const findById = (customerId:number) =>{
    try {
        return customerRepository.findById(customerId);
    } catch (error) {
        mapPrismaError(error,'Customer',customerId.toString());
    }
}

export const findByFullName = (dto:FullNameCustomerDto) =>{
    try {
        return customerRepository.findByFullName(dto.firstName,dto.lastName,dto.secondLastName,dto.middleName);
    } catch (error) {
        mapPrismaError(error,
            'Customer',
            `${dto.firstName} ${dto.middleName ? dto.middleName : ''} ${dto.lastName} ${dto.secondLastName}`);
    }
}

export const create = (dto:CreateCustomerDto) =>{
    const newCustomer:CustomerCreateInput = {
        shop:{
            connect:{
                shopId:dto.shopId
            }
        },
        firstName:dto.firstName,
        middleName:dto.middleName,
        lastName:dto.lastName,
        secondLastName:dto.secondLastName,
        phoneNumber:dto.phoneNumber,
        email:dto.email,
    };

    try {
        return customerRepository.create(newCustomer);
    } catch (error) {
        mapPrismaError(error,'User');
    }
}

export const update = (dto:UpdateCustomerDto) =>{
    const newCustomer:CustomerUpdateInput = {
        email:dto.email,
        phoneNumber:dto.phoneNumber
    }

    try {
        return customerRepository.update(dto.customerId,newCustomer)
    } catch (error) {
        mapPrismaError(error,'Customer',dto.customerId.toString());
    }
}

export const remove = (customerId:number) =>{
    try {
        return customerRepository.remove(customerId);
    } catch (error) {
        mapPrismaError(error,'Customer',customerId.toString());
    }
}