import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreateWarehouseDto } from '../../dto/shop/create/CreateWarehouseDto';
import { UpdateWarehouseDto } from '../../dto/shop/update/UpdateWarehouseDto';
import { BadRequestError } from '../../exceptions/BadRequestError';
import { WarehouseCreateInput, WarehouseUpdateInput } from '../../generated/prisma/models';
import * as warehouseRepository from '../../repository/shop/WarehouseRepository';

export const findAllByShopId = (shopId:number) =>{
    return warehouseRepository.findAllByShopId(shopId);
}

export const findByPieceId = (shopId:number,pieceId:number) =>{
    try {
        return warehouseRepository.findByPieceId(shopId,pieceId);
    } catch (error) {
        mapPrismaError(error,'Piece',pieceId.toString());
    }
}

export const create = async (dto:CreateWarehouseDto) =>{
    //DRY (Don't Repeat Yourself)
    const shopId = dto.shopId;
    const pieceId = dto.pieceId;

    //Validate if the record already exists in the database, if so call update instead
    try {
        if(await findByPieceId(shopId,pieceId)){
            const quantity = dto.quantity
            return update({shopId,pieceId,quantity,notes:dto.notes});
        }
    } catch (error) {
        //Means it did not found any error and can procede
    }

    if(dto.quantity <= 0){
        throw new BadRequestError('Quantity cannot be cero or less');
    }

    const newWarehouse:WarehouseCreateInput = {
        shop:{
            connect:{
                shopId
            }
        },
        piece:{
            connect:{
                pieceId
            }
        },
        quantity:dto.quantity,
        notes:dto.notes
    }

    try {
        return warehouseRepository.create(newWarehouse);
    } catch (error) {
        mapPrismaError(error,'Warehouse');
    }
}

export const update = (dto:UpdateWarehouseDto) =>{
    const newWarehouse:WarehouseUpdateInput = {
        quantity:dto.quantity,
        notes:dto.notes
    }

    try {
        return warehouseRepository.update(dto.shopId,dto.pieceId,newWarehouse);
    } catch (error) {
        mapPrismaError(error,'Warehouse', `ShopId:${dto.shopId} PieceId:${dto.pieceId}`);
    }
}

export const remove = (shopId:number,pieceId:number) =>{
    try {
        return warehouseRepository.remove(shopId,pieceId);
    } catch (error) {
        mapPrismaError(error,'Warehouse', `ShopId:${shopId} PieceId:${pieceId}`);
    }
}