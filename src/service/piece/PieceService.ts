import { PRISMA_CODES } from '../../common/constants/PrismaErrorCodes';
import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreatePieceDto } from '../../dto/piece/CreatePieceDto';
import { UpdatePieceDto } from '../../dto/piece/UpdatePieceDto';
import { BadRequestError } from '../../exceptions/BadRequestError';
import { ConflictError } from '../../exceptions/ConflictError';
import { NotFoundError } from '../../exceptions/NotFoundError';
import { PrismaClientKnownRequestError } from '../../generated/prisma/internal/prismaNamespace';
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

export const create = (newPiece:CreatePieceDto) =>{
    const name = newPiece.name.trim();
    const details = newPiece.details.trim();

    if(name.length === 0 || details.length === 0){
        throw new BadRequestError('One or more fields are empty');
    }

    try {
        return pieceRepository.create({
            name:name,
            details:details,
        });
    } catch (error) {
        mapPrismaError(error,"Piece");
    }
}

export const update = (piece:UpdatePieceDto) =>{
    const details = piece.details.trim();

    if(details.length === 0){
        throw new BadRequestError('The details field is empty');
    }

    try {
        return pieceRepository.update(piece.id,{details})
    } catch (error) {
        mapPrismaError(error,"Piece",piece.id.toString());
    }
}

export const remove = (id:number) =>{
    try {
        return pieceRepository.remove(id);
    } catch (error) {
        mapPrismaError(error,"Piece",id.toString());
    }
}