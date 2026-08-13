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

export const create = (employee:CreateEmployeeDto) =>{
    const newEmployee:EmployeeCreateInput = {
        user:{
            connect:{
                userId:employee.userId
            }
        },
        shop:{
            connect:{
                shopId:employee.shopId
            }
        },
        position:{
            connect:{
                positionId:employee.positionId
            }
        }
    }

    try {
        return employeeRepository.create(newEmployee);
    } catch (error) {
        mapPrismaError(error,'Employee');
    }
}

export const update = async (employee:UpdateEmployeeDto) =>{
    const newEmployee:EmployeeUpdateInput = {
        position:{
            connect:{
                positionId:employee.positionId
            }
        }
    }

    try {
        return await employeeRepository.update(employee.shopId,employee.userId,newEmployee);
    } catch (error) {
        mapPrismaError(error,"Employee",employee.userId.toString());
    }
}

export const remove = async (userId:number,shopId:number) => {
    try {
        return await employeeRepository.remove(shopId,userId);
    } catch (error) {
        mapPrismaError(error,"Employee",userId.toString());
    }
}