import { PieceCreateInput, PieceUpdateInput } from "../../generated/prisma/models";
import prisma from "../../models/common/prisma";

export const findAll = () =>{
    return prisma.piece.findMany();
}

export const findById = (pieceId:number) =>{
    return prisma.piece.findUniqueOrThrow({
        where:{
            pieceId
        }
    });
}

export const findByName = (name:string) =>{
    return prisma.piece.findMany({
        where:{
            name
        }
    });
}

export const create = (piece:PieceCreateInput) =>{
    return prisma.piece.create({
        data:piece
    });
}

export const update = (pieceId:number,piece:PieceUpdateInput) =>{
    return prisma.piece.update({
        where:{
            pieceId
        },
        data:piece
    });
}

export const remove = (pieceId:number) =>{
    return prisma.piece.delete({
        where:{
            pieceId
        }
    });
}