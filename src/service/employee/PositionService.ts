import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreatePositionDto } from '../../dto/employee/create/CreatePositionDto';
import { UpdatePositionDto } from '../../dto/employee/update/UpdatePositionDto';
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

export const create = async (dto:CreatePositionDto) =>{
    const newPosition:PositionCreateInput ={
        name:dto.name
    }

    return positionRepository.create(newPosition);
}

export const update = (dto:UpdatePositionDto) =>{
    const newPosition:PositionUpdateInput = {
        name:dto.name
    }

    try {
        return positionRepository.update(dto.positionId,newPosition);
    } catch (error) {
        mapPrismaError(error,"Position",dto.positionId.toString());
    }
}

export const remove = (positionId:number) =>{
    try {
        return positionRepository.remove(positionId);
    } catch (error) {
        mapPrismaError(error,'Position',positionId.toString());
    }
}