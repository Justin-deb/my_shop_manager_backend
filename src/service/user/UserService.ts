import { mapPrismaError } from "../../common/utils/ErrorWrapper.js";
import { CreateUserDto } from "../../dto/user/create/CreateUserDto.js";
import { UpdateUserDto } from "../../dto/user/update/UpdateUserDto.js";
import { BadRequestError } from "../../exceptions/BadRequestError.js";
import { NotFoundError } from "../../exceptions/NotFoundError.js";
import { UnauthroizeError } from "../../exceptions/UnauthroizeError.js";
import { UserCreateInput, UserUpdateInput } from "../../generated/prisma/models.js";
import * as userRepository from "../../repository/user/UserRepository.js";
import { createTokens } from "./security/user/Authenticate.js";
import * as userRolesService from "./UserRolesService.js";
import bcrypt from 'bcrypt';

const SALT_ROUNDS = parseInt(process.env["BCRYPT_SALT_ROUNDS"]!);
const USER_ROLE_ID = 2;

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

export const findByEmail = (email:string) =>{
    try {
        return userRepository.findByEmail(email);
    } catch (error) {
        mapPrismaError(error,'User',email);
    }
}

export const comparePassword = async (userId:number,password:string) =>{
    try {
        const passwordHash = await userRepository.findPasswordById(userId);

        return await bcrypt.compare(password,passwordHash);
    } catch (error) {
        throw new UnauthroizeError('Invalid credentials');
    }
}

export const create = async (dto:CreateUserDto) =>{
    //Encrypt password
    const passwordHash = await bcrypt.hash(dto.password,SALT_ROUNDS);
    
    
    const newUser:UserCreateInput = {
        firstName:dto.firstName,
        middleName:dto.middleName,
        lastName:dto.lastName,
        secondLastName:dto.secondLastName,
        email:dto.email,
        passwordHash:passwordHash
    }

    try {
        const user = await userRepository.create(newUser);
        
        await userRolesService.create(user.userId,USER_ROLE_ID);
        const tokens = await createTokens(user.userId);

        return {user,...tokens};
    } catch (error) {
        mapPrismaError(error,'User');
    }
}

export const update = async (userId:number,dto:UpdateUserDto) =>{
    const newUser:UserUpdateInput = {
        firstName:dto.firstName,
        middleName:dto.middleName,
        lastName:dto.lastName,
        secondLastName:dto.secondLastName
    }

    try {
        return userRepository.update(userId,newUser);
    } catch (error) {
        mapPrismaError(error,'User',userId.toString());
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