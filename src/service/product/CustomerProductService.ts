import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreateCustomerProductDto } from '../../dto/product/create/CreateCustomerProductDto';
import { UpdateCustomerProductDto } from '../../dto/product/update/UpdateCustomerProductDto';
import { CustomerProductCreateInput, CustomerProductUpdateInput } from '../../generated/prisma/models';
import * as customerProductRepository from '../../repository/product/CustomerProductRepository';

export const findByCustomerId = (customerId:number,shopId:number) =>{
    return customerProductRepository.findByCustomerId(customerId,shopId);
}

export const findByProductId = (productId:number,shopId:number) =>{
    return customerProductRepository.findByProductId(productId,shopId);
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
        return customerProductRepository.update(dto.customerId,dto.productId,newCustomerProduct);
    } catch (error) {
        mapPrismaError(error,'Customer-Product',`Customer:${dto.customerId} ProductId:${dto.productId}`);
    }
}

export const remove = (customerId:number,productId:number) =>{
    try {
        return customerProductRepository.remove(customerId,productId);
    } catch (error) {
        mapPrismaError(error,'Customer-Product',`Customer:${customerId} ProductId:${productId}`);
    }
}