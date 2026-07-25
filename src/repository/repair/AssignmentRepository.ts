import {
  AssignmentCreateInput,
  AssignmentUpdateInput,
} from '../../generated/prisma/models';
import prisma from '../../models/common/prisma';

const include = {
  employee: true,
  repair: true,
};

export const findAllByRepairId = (shopId:number,repairId: number) => {
  return prisma.assignment.findMany({
    where: {
        shopId,
        repairId
    },
    include
  });
};

export const findAllActiveByShopId = (shopId: number) => {
    return prisma.assignment.findMany({
        where:{
            shopId,
            finishedAt:null
        },
        include
    });
};

export const findAllByEmployeeId = (employeeId: number, shopId: number) => {
    return prisma.assignment.findMany({
        where:{
            shopId,
            userId:employeeId
        },
        include
    });
};

export const findById = (shopId:number,assignmentId: number) => {
    return prisma.assignment.findUniqueOrThrow({
        where:{
            shopId,
            assignmentId
        },
        include
    });
};

export const create = (assignment: AssignmentCreateInput) => {
    return prisma.assignment.create({
        data:assignment
    });
};

export const update = (shopId:number,assignmentId: number,assignment: AssignmentUpdateInput) => {
    return prisma.assignment.update({
        where:{
            shopId,
            assignmentId
        },
        data:assignment
    });
};

export const remove = (shopId:number,assignmentId: number) => {
    return prisma.assignment.delete({
        where:{
            shopId,
            assignmentId
        }
    });
};
