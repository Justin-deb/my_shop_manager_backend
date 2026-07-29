import { PRISMA_CODES } from '../../common/constants/PrismaErrorCodes';
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
        if(error instanceof PrismaClientKnownRequestError && error.code === PRISMA_CODES.UNIQUE_CONSTRAINT){
            throw new ConflictError('A piece with that name already exists');
        }
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
        if(error instanceof PrismaClientKnownRequestError && error.code === PRISMA_CODES.RECORD_NOT_FOUND){
            throw new NotFoundError(`Piece not found with the id: ${piece.id}`);
        }

        throw error
    }
}

export const remove = (id:number) =>{
    try {
        return pieceRepository.remove(id);
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError && error.code === PRISMA_CODES.RECORD_NOT_FOUND){
            throw new NotFoundError(`Piece not found with the id: ${id}`);
        }

        throw error
    }
}