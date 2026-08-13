import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreatePositionDto } from '../../dto/employee/create/CreatePositionDto';
import { UpdatePositionDto } from '../../dto/employee/update/UpdatePositionDto';
import { BadRequestError } from '../../exceptions/BadRequestError';
import { ConflictError } from '../../exceptions/ConflictError';
import { PositionCreateInput, PositionUpdateInput } from '../../generated/prisma/models';
import * as positionRepository from '../../repository/employee/PositionRepository';

export const findAll = () =>{
    return positionRepository.findAll();
}

export const findById = (id:number) =>{
    try {
        return positionRepository.findById(id);
    } catch (error) {
        mapPrismaError(error,"Position",id.toString());
    }
}

export const findByName = (name:string) =>{
    return positionRepository.findByName(name);
}

export const create = async (position:CreatePositionDto) =>{
    const newPosition:PositionCreateInput ={
        name:position.name
    }

    return positionRepository.create(newPosition);
}

export const update = (position:UpdatePositionDto) =>{
    const newPosition:PositionUpdateInput = {
        name:position.name
    }

    try {
        return positionRepository.update(position.positionId,newPosition);
    } catch (error) {
        mapPrismaError(error,"Position",position.positionId.toString());
    }
}

export const remove = (positionId:number) =>{
    try {
        return positionRepository.remove(positionId);
    } catch (error) {
        mapPrismaError(error,'Position',positionId.toString());
    }
}