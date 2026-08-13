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

export const findByFullName = (fullName:FullNameCustomerDto) =>{
    try {
        return customerRepository.findByFullName(fullName.firstName,fullName.lastName,fullName.secondLastName,fullName.middleName);
    } catch (error) {
        mapPrismaError(error,
            'Customer',
            `${fullName.firstName} ${fullName.middleName ? fullName.middleName : ''} ${fullName.lastName} ${fullName.secondLastName}`);
    }
}

export const create = (customer:CreateCustomerDto) =>{
    const newCustomer:CustomerCreateInput = {
        firstName:customer.firstName,
        middleName:customer.middleName,
        lastName:customer.lastName,
        secondLastName:customer.secondLastName,
        phoneNumber:customer.phoneNumber,
        email:customer.email,
    };

    try {
        return customerRepository.create(newCustomer);
    } catch (error) {
        mapPrismaError(error,'User');
    }
}

export const update = (customer:UpdateCustomerDto) =>{
    const newCustomer:CustomerUpdateInput = {
        email:customer.email,
        phoneNumber:customer.phoneNumber
    }

    try {
        return customerRepository.update(customer.customerId,newCustomer)
    } catch (error) {
        mapPrismaError(error,'Customer',customer.customerId.toString());
    }
}

export const remove = (customerId:number) =>{
    try {
        return customerRepository.remove(customerId);
    } catch (error) {
        mapPrismaError(error,'Customer',customerId.toString());
    }
}