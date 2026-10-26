import { mapPrismaError } from "../../common/utils/ErrorWrapper.js";
import { CreateAssignmentDto } from "../../dto/repair/create/CreateAssignmentDto.js";
import { UpdateAssignmentDto } from "../../dto/repair/update/UpdateAssignmentDto.js";
import { AssignmentCreateInput, AssignmentUpdateInput } from "../../generated/prisma/models.js";
import * as assignmentRepository from "../../repository/repair/AssignmentRepository.js";

export const findAllByRepairId = (shopId:number,repairId:number) =>{
    return assignmentRepository.findAllByRepairId(shopId,repairId);
}

export const findAllActiveByShopId = (shopId:number) =>{
    return assignmentRepository.findAllActiveByShopId(shopId);
}

export const findAllByEmployeeId = (shopId:number,employeeId:number) =>{
    return assignmentRepository.findAllByEmployeeId(shopId,employeeId);
}

export const findById = (shopId:number,id:number) =>{
    try {
        return assignmentRepository.findById(shopId,id);
    } catch (error) {
        mapPrismaError(error,'Assignment',`Assignment:${id} Shop:${shopId}`);
    }
}

export const create = (dto:CreateAssignmentDto) =>{
    const newAssignment:AssignmentCreateInput = {
        assignedAt:dto.assignedAt ?? new Date(),
        finishedAt:dto.finishedAt,
        employee:{
            connect:{
                shopId_userId:{
                    shopId:dto.shopId,
                    userId:dto.employeeId
                }
            }
        },
        repair:{
            connect:{
                shopId:dto.shopId,
                repairId:dto.repairId
            }
        }
    }

    try {
        return assignmentRepository.create(newAssignment);
    } catch (error) {
        mapPrismaError(error,'Assignment');
    }
}

export const update = (shopId:number,assignmentId:number,dto:UpdateAssignmentDto) =>{
    let newAssignment:AssignmentUpdateInput ={
        finishedAt:dto.finishedAt
    }

    if(dto.employeeId){
        newAssignment.employee = {
            connect:{
                shopId_userId:{
                    shopId:shopId,
                    userId:dto.employeeId
                }
            }
        }
    }

    try {
        return assignmentRepository.update(shopId,assignmentId,newAssignment);
    } catch (error) {
        mapPrismaError(error,'Assignment',assignmentId.toString());
    }
}

export const remove = (shopId:number,assignmentId:number) =>{
    try {
        return assignmentRepository.remove(shopId,assignmentId);
    } catch (error) {
        mapPrismaError(error,'Assignment',assignmentId.toString());
    }
}