import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { FullNameCustomerDto } from '../../dto/user/common/FullNameCustomerDto';
import { CreateCustomerDto } from '../../dto/user/create/CreateCustomerDto';
import { UpdateCustomerDto } from '../../dto/user/update/UpdateCustomerDto';
import { BadRequestError } from '../../exceptions/BadRequestError';
import { CustomerUpdateInput } from '../../generated/prisma/models';
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
    const firstName = fullName.firstName.trim();
    const middleName = fullName.middleName?.trim();
    const lastName = fullName.lastName.trim();
    const secondLastName = fullName.secondLastName.trim();

    const fields = [firstName,middleName,lastName,secondLastName];

    fields.forEach(field =>{
        if(field?.length === 0){
            throw new BadRequestError('One or more fields are empty');
        }
    });

    try {
        return customerRepository.findByFullName(firstName,lastName,secondLastName,middleName);
    } catch (error) {
        mapPrismaError(error,
            'Customer',
            `${firstName} ${middleName ? middleName : ''} ${lastName} ${secondLastName}`);
    }
}

export const create = (customer:CreateCustomerDto) =>{

}

export const update = (customer:UpdateCustomerDto) =>{
    const email = customer.email?.trim();
    const phoneNumber = customer.phoneNumber?.trim();

    if(email?.length === 0 || phoneNumber?.length === 0){
        throw new BadRequestError('One or more fields are empty');
    }

    const newCustomer:CustomerUpdateInput = {
        email,
        phoneNumber
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