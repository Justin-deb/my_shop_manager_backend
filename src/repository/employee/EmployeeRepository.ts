import { EmployeeCreateInput, EmployeeUpdateInput } from '../../generated/prisma/models';
import prisma from '../../models/common/prisma';

const include = {
  position: true,
  assignments: true,
};

export const findAllByShopId = (shopId: number) => {
  return prisma.employee.findMany({
    where: {
      shopId,
    },
    include
  });
};

export const findByName = (name:string,shopId:number) =>{
    return prisma.employee.findMany({
        where:{
            shopId,
            user:{
                firstName:{
                    contains:name
                }
            }

        },
        include
    });
}

export const create = (employee:EmployeeCreateInput) =>{
    return prisma.employee.create({
        data:employee
    });
}

export const update = (shopId:number,userId:number,employee:EmployeeUpdateInput) =>{
    return prisma.employee.update({
        where:{
            shopId_userId:{
                shopId,
                userId
            }
        },data:employee
    });
}

export const remove = (shopId:number,userId:number) =>{
    return prisma.employee.delete({
        where:{
            shopId_userId:{
                shopId,
                userId
            }
        }
    });
}