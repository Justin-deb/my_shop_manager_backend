import { mapPrismaError } from "../../common/utils/ErrorWrapper.js";
import { CreateShopDto } from "../../dto/shop/create/CreateShopDto.js";
import { UpdateShopDto } from "../../dto/shop/update/UpdateShopDto.js";
import { ShopCreateInput, ShopUpdateInput } from "../../generated/prisma/models.js";
import * as shopRepository from "../../repository/shop/ShopRepository.js";

export const findAll = () =>{
    return shopRepository.findAll();
}

export const findById = (shopId:number) =>{
    try {
        return shopRepository.findById(shopId);
    } catch (error) {
        mapPrismaError(error,'Shop',shopId.toString());
    }
}

export const findByOwnerId = (ownerId:number) =>{
    return shopRepository.findByOwnerId(ownerId);
}

export const create = (dto:CreateShopDto) =>{
    const newShop:ShopCreateInput = {
        user:{
            connect:{
                userId:dto.userId
            }
        },
        name:dto.name,
        address:dto.address,
        phoneNumber:dto.phoneNumber,
        email:dto.email,
        photoUrl:dto.photoUrl
    }

    try {
        return shopRepository.create(newShop);
    } catch (error) {
        mapPrismaError(error,'Shop');
    }
}

export const update = (shopId:number,dto:UpdateShopDto) =>{
    const newShop:ShopUpdateInput = {
        name:dto.name,
        address:dto.address,
        phoneNumber:dto.phoneNumber,
        email:dto.email,
        photoUrl:dto.photoUrl
    }

    try {
        return shopRepository.update(shopId,newShop);
    } catch (error) {
        mapPrismaError(error,'Shop',shopId.toString());
    }
}

export const remove = (shopId:number) =>{
    try {
        return shopRepository.remove(shopId);
    } catch (error) {
        mapPrismaError(error,'Shop',shopId.toString());
    }
}