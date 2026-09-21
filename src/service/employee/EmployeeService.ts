import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreateEmployeeDto } from '../../dto/employee/create/CreateEmployeeDto';
import { UpdateEmployeeDto } from '../../dto/employee/update/UpdateEmployeeDto';
import { EmployeeCreateInput, EmployeeUpdateInput } from '../../generated/prisma/internal/prismaNamespace';
import * as employeeRepository from '../../repository/employee/EmployeeRepository';

export const findAllByShopId = (shopId:number) =>{
    return employeeRepository.findAllByShopId(shopId);
}

export const findByName = (shopId:number,name:string) =>{
    return employeeRepository.findByName(shopId,name);
}

export const findById = (shopId:number,employeeId:number) =>{
    try {
        return employeeRepository.findById(shopId,employeeId);
    } catch (error) {
        mapPrismaError(error,"Employee",employeeId.toString());
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

export const update = (dto:UpdateEmployeeDto) =>{
    const newEmployee:EmployeeUpdateInput = {
        position:{
            connect:{
                positionId:dto.positionId
            }
        }
    }

    try {
        return employeeRepository.update(dto.shopId,dto.userId,newEmployee);
    } catch (error) {
        mapPrismaError(error,"Employee",dto.userId.toString());
    }
}

export const remove = (shopId:number,employeeId:number) => {
    try {
        return employeeRepository.remove(shopId,employeeId);
    } catch (error) {
        mapPrismaError(error,"Employee",employeeId.toString());
    }
}