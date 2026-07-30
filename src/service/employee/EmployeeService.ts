import { PRISMA_CODES } from '../../common/constants/PrismaErrorCodes';
import { CreateEmployeeDto } from '../../dto/employee/CreateEmployeeDto';
import { UpdateEmployeeDto } from '../../dto/employee/UpdateEmployeeDto';
import { BadRequestError } from '../../exceptions/BadRequestError';
import { NotFoundError } from '../../exceptions/NotFoundError';
import { EmployeeCreateInput, EmployeeUpdateInput, PrismaClientKnownRequestError } from '../../generated/prisma/internal/prismaNamespace';
import * as employeeRepository from '../../repository/employee/EmployeeRepository';

export const findAllByShopId = (shopId:number) =>{
    return employeeRepository.findAllByShopId(shopId);
}

export const findByName = (name:string, shopId:number) =>{
    const employeeName = name.trim();

    if(employeeName.length === 0){
        throw new BadRequestError('The name field is empty');
    }

    return employeeRepository.findByName(employeeName,shopId);
}

export const findById = (employeeId:number,shopId:number) =>{
    try {
        return employeeRepository.findById(employeeId,shopId);
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError && error.code === PRISMA_CODES.RECORD_NOT_FOUND){
            throw new NotFoundError(`Employee not found by the id: ${employeeId}`);
        }

        throw error;
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

    return employeeRepository.create(newEmployee);
}

export const update = (employee:UpdateEmployeeDto) =>{
    const newEmployee:EmployeeUpdateInput = {
        position:{
            update:{
                positionId:employee.positionId
            }
        }
    }

    try {
        return employeeRepository.update(employee.shopId,employee.employeeId,newEmployee);
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError && error.code === PRISMA_CODES.RECORD_NOT_FOUND){
            throw new NotFoundError(`Employee not found by the id: ${employee.employeeId}`);
        }

        throw error;
    }
}

export const remove = (employeeId:number,shopId:number) => {
    try {
        return employeeRepository.remove(shopId,employeeId);
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError && error.code === PRISMA_CODES.RECORD_NOT_FOUND){
            throw new NotFoundError(`Employee not found by the id: ${employeeId}`);
        }

        throw error;
    }
}