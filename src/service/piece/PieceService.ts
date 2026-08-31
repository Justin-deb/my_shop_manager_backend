import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreatePieceDto } from '../../dto/piece/create/CreatePieceDto';
import { UpdatePieceDto } from '../../dto/piece/update/UpdatePieceDto';
import { BadRequestError } from '../../exceptions/BadRequestError';
import { PieceCreateInput } from '../../generated/prisma/internal/prismaNamespace';
import * as pieceRepository from '../../repository/piece/PieceRepository';

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

export const update = (dto:UpdatePieceDto) =>{
    const details = dto.details.trim();

    if(details.length === 0){
        throw new BadRequestError('The details field is empty');
    }

    try {
        return pieceRepository.update(dto.id,{details})
    } catch (error) {
        mapPrismaError(error,"Piece",dto.id.toString());
    }
}

export const remove = (id:number) =>{
    try {
        return pieceRepository.remove(id);
    } catch (error) {
        mapPrismaError(error,"Piece",id.toString());
    }
}