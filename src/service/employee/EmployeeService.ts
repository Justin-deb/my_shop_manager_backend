import { PRISMA_CODES } from '../../common/constants/PrismaErrorCodes';
import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreateEmployeeDto } from '../../dto/employee/create/CreateEmployeeDto';
import { UpdateEmployeeDto } from '../../dto/employee/update/UpdateEmployeeDto';
import { BadRequestError } from '../../exceptions/BadRequestError';
import { NotFoundError } from '../../exceptions/NotFoundError';
import { EmployeeCreateInput, EmployeeUpdateInput, PrismaClientKnownRequestError } from '../../generated/prisma/internal/prismaNamespace';
import * as employeeRepository from '../../repository/employee/EmployeeRepository';

export const findAllByShopId = (shopId:number) =>{
    return employeeRepository.findAllByShopId(shopId);
}

export const findByName = (name:string, shopId:number) =>{
    return employeeRepository.findByName(name,shopId);
}

export const findById = async (userId:number,shopId:number) =>{
    try {
        return await employeeRepository.findById(userId,shopId);
    } catch (error) {
        mapPrismaError(error,"Employee",userId.toString());
    }
}

export const create = (dto:CreateEmployeeDto) =>{
    const newEmployee:EmployeeCreateInput = {
        user:{
            connect:{
                userId:dto.userId
            }
        },
        shop:{
            connect:{
                shopId:dto.shopId
            }
        },
        position:{
            connect:{
                positionId:dto.positionId
            }
        }
    }

    try {
        return employeeRepository.create(newEmployee);
    } catch (error) {
        mapPrismaError(error,'Employee');
    }
}

export const update = async (dto:UpdateEmployeeDto) =>{
    const newEmployee:EmployeeUpdateInput = {
        position:{
            connect:{
                positionId:dto.positionId
            }
        }
    }

    try {
        return await employeeRepository.update(dto.shopId,dto.userId,newEmployee);
    } catch (error) {
        mapPrismaError(error,"Employee",dto.userId.toString());
    }
}

export const remove = async (userId:number,shopId:number) => {
    try {
        return await employeeRepository.remove(shopId,userId);
    } catch (error) {
        mapPrismaError(error,"Employee",userId.toString());
    }
}