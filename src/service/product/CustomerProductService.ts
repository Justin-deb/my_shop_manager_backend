import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreateCustomerProductDto } from '../../dto/product/create/CreateCustomerProductDto';
import { UpdateCustomerProductDto } from '../../dto/product/update/UpdateCustomerProductDto';
import { CustomerProductCreateInput, CustomerProductUpdateInput } from '../../generated/prisma/models';
import * as customerProductRepository from '../../repository/product/CustomerProductRepository';

export const findById = (shopId:number,customerId:number,productId:number) =>{
    try {
        return customerProductRepository.findById(shopId,customerId,productId);
    } catch (error) {
        mapPrismaError(error,'Customer-Product',`Customer:${customerId} ProductId:${productId}`);
    }
}

export const findByCustomerId = (shopId:number,customerId:number) =>{
    return customerProductRepository.findByCustomerId(shopId,customerId);
}

export const findByProductId = (shopId:number,productId:number) =>{
    return customerProductRepository.findByProductId(shopId,productId);
}

export const create = (dto:CreateCustomerProductDto) =>{
    //TODO Validate if the customer specified really belongs to that shop
    const newCustomerProduct:CustomerProductCreateInput = {
        serialNumber:dto.serialNumber,
        name:dto.name,
        customer:{
            connect:{
                customerId:dto.customerId
            }
        },
        product:{
            connect:{
                productId:dto.productId
            }
        },
        shop:{
            connect:{
                shopId:dto.shopId
            }
        }
    }

    try {
        return customerProductRepository.create(newCustomerProduct);
    } catch (error) {
        mapPrismaError(error,'Customer-Product',`Customer:${dto.customerId} ProductId:${dto.productId}`);
    }
}

export const update = (dto:UpdateCustomerProductDto) =>{
    const newCustomerProduct:CustomerProductUpdateInput = {
        serialNumber:dto.serialNumber,
        name:dto.name
    }

    try {
        return customerProductRepository.update(dto.shopId,dto.customerId,dto.productId,newCustomerProduct);
    } catch (error) {
        mapPrismaError(error,'Customer-Product',`Customer:${dto.customerId} ProductId:${dto.productId}`);
    }
}

export const remove = (shopId:number,customerId:number,productId:number) =>{
    try {
        return customerProductRepository.remove(shopId,customerId,productId);
    } catch (error) {
        mapPrismaError(error,'Customer-Product',`Customer:${customerId} ProductId:${productId}`);
    }
}