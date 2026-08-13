import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreateRoleDto } from '../../dto/user/create/CreateRoleDto';
import { UpdateRoleDto } from '../../dto/user/update/UpdateRoleDto';
import { BadRequestError } from '../../exceptions/BadRequestError';
import { RoleCreateInput, RoleUpdateInput } from '../../generated/prisma/models';
import * as roleRepository from '../../repository/user/RoleRepository';

export const findAll = () =>{
    return roleRepository.findAll();
}

export const findById = (id:number) =>{
    try {
        return roleRepository.findById(id);
    } catch (error) {
        mapPrismaError(error,'Role',id.toString());
    }
}

export const findByName = (name:string) =>{
    return roleRepository.findByName(name);
}

export const create = (role:CreateRoleDto) =>{
    const newRole:RoleCreateInput = {
        name:role.name
    }

    try {
        return roleRepository.create(newRole);
    } catch (error) {
        mapPrismaError(error,'Role');
    }
}

export const update = (role:UpdateRoleDto) =>{
    const newRole:RoleUpdateInput = {
        name:role.name
    }

    try {
        return roleRepository.update(role.roleId,newRole);
    } catch (error) {
        mapPrismaError(error,'Role',role.roleId.toString());
    }
}

export const remove = (roleId:number) =>{
    try {
        return roleRepository.remove(roleId);
    } catch (error) {
        mapPrismaError(error,'Role',roleId.toString());
    }
}