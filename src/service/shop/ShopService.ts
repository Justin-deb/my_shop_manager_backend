import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreateShopDto } from '../../dto/shop/create/CreateShopDto';
import { UpdateShopDto } from '../../dto/shop/update/UpdateShopDto';
import { ShopCreateInput, ShopUpdateInput } from '../../generated/prisma/models';
import * as shopRepository from '../../repository/shop/ShopRepository';

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

export const create = (shop:CreateShopDto) =>{
    const newShop:ShopCreateInput = {
        user:{
            connect:{
                userId:shop.userId
            }
        },
        name:shop.name,
        address:shop.address,
        phoneNumber:shop.phoneNumber,
        email:shop.email,
        photoUrl:shop.photoUrl
    }

    try {
        return shopRepository.create(newShop);
    } catch (error) {
        mapPrismaError(error,'Shop');
    }
}

export const update = (shop:UpdateShopDto) =>{
    const newShop:ShopUpdateInput = {
        name:shop.name,
        address:shop.address,
        phoneNumber:shop.phoneNumber,
        email:shop.email,
        photoUrl:shop.photoUrl
    }

    try {
        return shopRepository.update(shop.shopId,newShop);
    } catch (error) {
        mapPrismaError(error,'Shop',shop.shopId.toString());
    }
}

export const remove = (shopId:number) =>{
    try {
        return shopRepository.remove(shopId);
    } catch (error) {
        mapPrismaError(error,'Shop',shopId.toString());
    }
}