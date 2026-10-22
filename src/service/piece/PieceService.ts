import { mapPrismaError } from "../../common/utils/ErrorWrapper.js";
import { CreatePieceDto } from "../../dto/piece/create/CreatePieceDto.js";
import { UpdatePieceDto } from "../../dto/piece/update/UpdatePieceDto.js";
import { BadRequestError } from "../../exceptions/BadRequestError.js";
import { PieceCreateInput, PieceUpdateInput } from "../../generated/prisma/internal/prismaNamespace.js";
import * as pieceRepository from "../../repository/piece/PieceRepository.js";

export const findAll = () =>{
    return pieceRepository.findAll();
}

export const findById = (id:number) =>{
    return pieceRepository.findById(id);
}

export const findByName = (name:string) =>{
    return pieceRepository.findByName(name);
}

export const create = (dto:CreatePieceDto) =>{
    const newPiece:PieceCreateInput = {
            name:dto.name,
            details:dto.details,
    }
    
    try {
        return pieceRepository.create(newPiece);
    } catch (error) {
        mapPrismaError(error,"Piece");
    }
}

export const update = (pieceId:number,dto:UpdatePieceDto) =>{
    const newPiece:PieceUpdateInput = {
        details:dto.details
    }
    
    try {
        return pieceRepository.update(pieceId,newPiece);
    } catch (error) {
        mapPrismaError(error,"Piece",pieceId.toString());
    }
}

export const remove = (id:number) =>{
    try {
        return pieceRepository.remove(id);
    } catch (error) {
        mapPrismaError(error,"Piece",id.toString());
    }
}