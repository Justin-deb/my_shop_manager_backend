import { mapPrismaError } from "../../common/utils/ErrorWrapper.js";
import { UserRolesCreateInput } from "../../generated/prisma/models.js";
import * as userRolesRepository from "../../repository/user/UserRolesRepository.js";

export const findAll = () =>{
    return userRolesRepository.findAll();
}

export const findAllRolesByUserId = (userId:number) =>{
    return userRolesRepository.findAllRolesByUserId(userId);
}

export const findAllUsersByRoleId = (roleId:number) =>{
    return userRolesRepository.findAllUsersByRoleId(roleId);
}

export const userHasRole = (userId:number,roleId:number) =>{
    return userRolesRepository.userHasRole(userId,roleId);
}

export const create = (userId:number,roleId:number) =>{
    const newUserRole:UserRolesCreateInput = {
        user:{
            connect:{
                userId
            }
        },
        role:{
            connect:{
                roleId
            }
        }
    }
    try {
        return userRolesRepository.create(newUserRole);
    } catch (error) {
        mapPrismaError(error,'User-Role');
    }
}

export const remove = (userId:number,roleId:number) =>{
    try {
        return userRolesRepository.remove(userId,roleId);
    } catch (error) {
        mapPrismaError(error,'User-Role',`User Id:${userId} Role Id:${roleId}`);
    }
}