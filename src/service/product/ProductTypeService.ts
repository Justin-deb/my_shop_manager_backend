import { mapPrismaError } from "../../common/utils/ErrorWrapper.js";
import { CreateProductTypeDto } from "../../dto/product/create/CreateProductTypeDto.js";
import { UpdateProductTypeDto } from "../../dto/product/update/UpdateProductType.js";
import { ProductTypeCreateInput, ProductTypeUpdateInput } from "../../generated/prisma/models.js";
import * as productTypeRepository from "../../repository/product/ProductTypeRepository.js";

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

export const update = (productTypeId:number,dto:UpdateProductTypeDto) =>{
    const newProductType:ProductTypeUpdateInput = {
        name:dto.name
    }

    try {
        return productTypeRepository.update(productTypeId,newProductType);
    } catch (error) {
        mapPrismaError(error,'Product Type',productTypeId.toString());
    }
}

export const remove = (id:number) =>{
    try {
        return productTypeRepository.remove(id);
    } catch (error) {
        mapPrismaError(error,'Product Type',id.toString());
    }
}