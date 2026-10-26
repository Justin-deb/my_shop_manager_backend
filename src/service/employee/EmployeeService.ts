import { mapPrismaError } from "../../common/utils/ErrorWrapper.js";
import { CreateEmployeeDto } from "../../dto/employee/create/CreateEmployeeDto.js";
import { UpdateEmployeeDto } from "../../dto/employee/update/UpdateEmployeeDto.js";
import { EmployeeCreateInput, EmployeeUpdateInput } from "../../generated/prisma/internal/prismaNamespace.js";
import * as employeeRepository from "../../repository/employee/EmployeeRepository.js";

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

export const update = (shopId:number,employeeId:number,dto:UpdateEmployeeDto) =>{
    const newEmployee:EmployeeUpdateInput = {
        position:{
            connect:{
                positionId:dto.positionId
            }
        }
    }

    try {
        return employeeRepository.update(shopId,employeeId,newEmployee);
    } catch (error) {
        mapPrismaError(error,"Employee",employeeId.toString());
    }
}

export const remove = (shopId:number,employeeId:number) => {
    try {
        return employeeRepository.remove(shopId,employeeId);
    } catch (error) {
        mapPrismaError(error,"Employee",employeeId.toString());
    }
}