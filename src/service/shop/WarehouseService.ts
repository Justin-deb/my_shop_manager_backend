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

export const create = async (warehouse:CreateWarehouseDto) =>{
    //DRY (Don't Repeat Yourself)
    const shopId = warehouse.shopId;
    const pieceId = warehouse.pieceId;

    //Validate if the record already exists in the database, if so call update instead
    try {
        if(await findByPieceId(shopId,pieceId)){
            const quantity = warehouse.quantity
            return update({shopId,pieceId,quantity,notes:warehouse.notes});
        }
    } catch (error) {
        //Means it did not found any error and can procede
    }

    if(warehouse.quantity <= 0){
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
        quantity:warehouse.quantity,
        notes:warehouse.notes
    }

    try {
        return warehouseRepository.create(newWarehouse);
    } catch (error) {
        mapPrismaError(error,'Warehouse');
    }
}

export const update = (warehouse:UpdateWarehouseDto) =>{
    const newWarehouse:WarehouseUpdateInput = {
        quantity:warehouse.quantity,
        notes:warehouse.notes
    }

    try {
        return warehouseRepository.update(warehouse.shopId,warehouse.pieceId,newWarehouse);
    } catch (error) {
        mapPrismaError(error,'Warehouse', `ShopId:${warehouse.shopId} PieceId:${warehouse.pieceId}`);
    }
}

export const remove = (shopId:number,pieceId:number) =>{
    try {
        return warehouseRepository.remove(shopId,pieceId);
    } catch (error) {
        mapPrismaError(error,'Warehouse', `ShopId:${shopId} PieceId:${pieceId}`);
    }
}