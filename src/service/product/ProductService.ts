import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreateProductDto } from '../../dto/product/create/CreateProductDto';
import { UpdateProductDto } from '../../dto/product/update/UpdateProductDto';
import { ProductCreateInput, ProductUpdateInput } from '../../generated/prisma/models';
import * as productRepository from '../../repository/product/ProductRepository';

export const findAll = () =>{
    return productRepository.findAll();
}

export const findById = (id:number) =>{
    try {
        return productRepository.findById(id);
    } catch (error) {
        mapPrismaError(error,'Product',id.toString());
    }
}

export const findByName = (name:string) =>{
    return productRepository.findByName(name);
}

export const findByProductionYear = (year:number) =>{
    return productRepository.findByProductionYear(year);
}

export const findByModel = (model:string) =>{
    return productRepository.findByModel(model);
}

export const findByManufacturer = (manufacturer:string) =>{
    return productRepository.findByManufacturer(manufacturer);
}

export const create = (dto:CreateProductDto) =>{
    const newProduct:ProductCreateInput = {
        manufacturer:dto.manufacturer,
        model:dto.model,
        productionYear:dto.productionYear,
        name:dto.name,
        photoUrl:dto.photoUrl,
        productType:{
            connect:{
                typeId:dto.productTypeId
            }
        }
    }

    try {
        return productRepository.create(newProduct);
    } catch (error) {
        mapPrismaError(error,'Product');
    }
}

export const update = (dto:UpdateProductDto) =>{
    const newProduct: ProductUpdateInput = {
        manufacturer:dto.manufacturer,
        model:dto.model,
        productionYear:dto.productionYear,
        name:dto.name,
        photoUrl:dto.photoUrl,
        productType:{
            connect:{
                typeId:dto.productTypeId
            }
        }
    }

    try {
        return productRepository.update(dto.id,newProduct);
    } catch (error) {
        mapPrismaError(error,'Product',dto.id.toString());
    }
}

export const remove = (id:number) =>{
    try {
        return productRepository.remove(id);
    } catch (error) {
        mapPrismaError(error,'Product',id.toString());
    }
}