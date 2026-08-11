import EnvVars from '../../common/constants/env';
import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreateUserDto } from '../../dto/user/create/CreateUserDto';
import { UpdateUserDto } from '../../dto/user/update/UpdateUserDto';
import { BadRequestError } from '../../exceptions/BadRequestError';
import { NotFoundError } from '../../exceptions/NotFoundError';
import { UserCreateInput, UserUpdateInput } from '../../generated/prisma/models';
import * as userRepository from '../../repository/user/UserRepository';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = parseInt(process.env["BCRYPT_SALT_ROUNDS"]!);

export const findAll = () =>{
    return userRepository.findAll();
}

export const findById = (userId:number) =>{
    try {
        return userRepository.findById(userId);
    } catch (error) {
        mapPrismaError(error,'User',userId.toString());
    }
}

export const findByName = (email:string) =>{
    if(email.length === 0){
        throw new BadRequestError('The email field is empty');
    }else if(!email.includes('@')){
        throw new BadRequestError('Invalid email');
    }

    try {
        return userRepository.findByEmail(email);
    } catch (error) {
        mapPrismaError(error,'User',email);
    }
}

export const create = async (user:CreateUserDto) =>{
    const firstName = user.firstName.trim();
    const middleName = user.middleName?.trim();
    const lastName = user.lastName.trim();
    const secondLastName = user.secondLastName.trim();
    const email = user.email?.trim();
    const password = user.password?.trim();

    const fields = [firstName,middleName,lastName,
                    secondLastName,email,password];
    
    fields.forEach(field =>{
        if(field?.length === 0){
            throw new BadRequestError('One or more fields are empty');
        }
    });

    if(user.roleId <= 0){
        throw new BadRequestError('Invalid role');
    }else if(!email?.includes('@')){
        throw new BadRequestError('Invalid Email');
    }

    //Encrypt password
    const passwordHash = await bcrypt.hash(password,SALT_ROUNDS);
    
    
    const newUser:UserCreateInput = {
        firstName,
        middleName,
        lastName,
        secondLastName,
        email,
        passwordHash,
        role:{
            connect:{
                roleId:user.roleId
            }
        }
    }

    try {
        return userRepository.create(newUser);
    } catch (error) {
        mapPrismaError(error,'User');
    }
}

export const update = async (user:UpdateUserDto) =>{
    if(user.roleId && user.roleId <= 0){
        throw new BadRequestError('Invalid role');
    }

    const newUser:UserUpdateInput = {
        firstName,
        middleName,
        lastName,
        secondLastName,
        role:{
            connect:{
                roleId:user.roleId
            }
        }
    }

    try {
        return userRepository.update(user.userId,newUser);
    } catch (error) {
        mapPrismaError(error,'User',user.userId.toString());
    }
}

export const changePassword = async (userId:number,oldPassword:string,newPassword:string) =>{
    //Get Password Hash
    let passwordHash;
    try {
        passwordHash = await userRepository.findPasswordById(userId);
    } catch (error) {
        mapPrismaError(error,'User',userId.toString());
    }

    if(!passwordHash){
        throw new NotFoundError(`User not found by the id: ${userId}`);
    }

    if(!(await bcrypt.compare(oldPassword,passwordHash))){
        throw new BadRequestError('The old password does not match');
    }

    const newPasswordHash = await bcrypt.hash(newPassword,SALT_ROUNDS);

    try {
        return userRepository.update(userId,{passwordHash:newPasswordHash});
    } catch (error) {
        mapPrismaError(error,'User',userId.toString());
    }
}

export const remove = (userId:number) =>{
    try {
        return userRepository.remove(userId);
    } catch (error) {
        mapPrismaError(error,'User',userId.toString());
    }
}