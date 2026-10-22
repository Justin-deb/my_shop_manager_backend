import { mapPrismaError } from "../../common/utils/ErrorWrapper.js";
import { FullNameCustomerDto } from "../../dto/user/common/FullNameCustomerDto.js";
import { CreateCustomerDto } from "../../dto/user/create/CreateCustomerDto.js";
import { UpdateCustomerDto } from "../../dto/user/update/UpdateCustomerDto.js";
import { CustomerCreateInput, CustomerUpdateInput } from "../../generated/prisma/models.js";
import * as customerRepository from "../../repository/user/CustomerRepository.js";

export const findAll = () =>{
    return customerRepository.findAll();
}

export const validateShopId = async (shopId:number,customerId:number) =>{
    try {
        const customerShopId = await customerRepository.getShopIdByCustomerId(customerId);
        return shopId === customerShopId;
    } catch (error) {
        mapPrismaError(error,'Customer',customerId.toString())
    }
}

export const findById = (shopId:number,customerId:number) =>{
    try {
        return customerRepository.findById(shopId,customerId);
    } catch (error) {
        mapPrismaError(error,'Customer',`Customer:${customerId} Shop:${shopId}`);
    }
}

export const findByFullName = (shopId:number,dto:FullNameCustomerDto) =>{
    try {
        return customerRepository.findByFullName(shopId,dto.firstName,dto.lastName,dto.secondLastName,dto.middleName);
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

export const update = (shopId:number,customerId:number,dto:UpdateCustomerDto) =>{
    const newCustomer:CustomerUpdateInput = {
        email:dto.email,
        phoneNumber:dto.phoneNumber
    }

    try {
        return customerRepository.update(shopId,customerId,newCustomer)
    } catch (error) {
        mapPrismaError(error,'Customer',customerId.toString());
    }
}

export const remove = (shopId:number,customerId:number) =>{
    try {
        return customerRepository.remove(shopId,customerId);
    } catch (error) {
        mapPrismaError(error,'Customer',customerId.toString());
    }
}