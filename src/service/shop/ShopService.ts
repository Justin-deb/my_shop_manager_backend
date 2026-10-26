import { mapPrismaError } from "../../common/utils/ErrorWrapper.js";
import { CreateShopDto } from "../../dto/shop/create/CreateShopDto.js";
import { UpdateShopDto } from "../../dto/shop/update/UpdateShopDto.js";
import { ShopCreateInput, ShopUpdateInput } from "../../generated/prisma/models.js";
import * as shopRepository from "../../repository/shop/ShopRepository.js";
import * as userRolesService from '../../service/user/UserRolesService.js';

const SHOP_OWNER_ROLE_ID = 3;

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

export const create = async (dto:CreateShopDto) =>{
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
        const shop = await shopRepository.create(newShop); 

        userRolesService.create(dto.userId,SHOP_OWNER_ROLE_ID);

        return shop; 
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