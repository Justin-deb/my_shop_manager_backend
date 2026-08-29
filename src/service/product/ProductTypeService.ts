import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreateProductTypeDto } from '../../dto/product/create/CreateProductTypeDto';
import { UpdateProductTypeDto } from '../../dto/product/update/UpdateProductType';
import { ProductTypeCreateInput, ProductTypeUpdateInput } from '../../generated/prisma/models';
import * as productTypeRepository from '../../repository/product/ProductTypeRepository';

export const findAll = () =>{
    return productTypeRepository.findAll();
}

export const findById = (id:number) =>{
    try {
        return productTypeRepository.findById(id);
    } catch (error) {
        mapPrismaError(error,'Product Type',id.toString());
    }
}

export const findByName = (name:string) =>{
    return productTypeRepository.findByName(name);
}

export const create = (dto:CreateProductTypeDto) =>{
    const newProductType:ProductTypeCreateInput = {
        name:dto.name
    }

    try {
        return productTypeRepository.create(newProductType);
    } catch (error) {
        mapPrismaError(error,'Product Type');
    }
}

export const update = (dto:UpdateProductTypeDto) =>{
    const newProductType:ProductTypeUpdateInput = {
        name:dto.name
    }

    try {
        return productTypeRepository.update(dto.id,newProductType);
    } catch (error) {
        mapPrismaError(error,'Product Type',dto.id.toString());
    }
}

export const remove = (id:number) =>{
    try {
        return productTypeRepository.remove(id);
    } catch (error) {
        mapPrismaError(error,'Product Type',id.toString());
    }
}