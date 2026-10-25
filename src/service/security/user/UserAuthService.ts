import { CreateUserDto } from "../../../dto/user/create/CreateUserDto.js";
import { UnauthroizeError } from "../../../exceptions/UnauthroizeError.js"
import { sessionStorage } from "../../../redis/RedisClients.js";
import { userHasRole } from "../../user/UserRolesService.js";
import { comparePassword } from "../../user/UserService.js"
import * as userService from '../../user/UserService.js';
import * as userRolesService from '../../user/UserRolesService.js';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;
const USER_ROLE_ID = 2;
const SHOP_OWNER_ROLE_ID = 3;

export const registerUser = async (dto:CreateUserDto) =>{
    const user = await userService.create(dto);

    await userRolesService.create(user!.userId,USER_ROLE_ID);
    return await createTokens(user!.userId);
}

export const loginUser = async (userId:number,password:string) =>{
    if(!(await comparePassword(userId,password))){
        throw new UnauthroizeError('Invalid credentials');
    }

    return createTokens(userId);
}

export const refreshSessionToken = async (userId:number,refreshToken:string) =>{
    const redisKey = `refreshToken:${refreshToken}`;

    const storedRefreshToken = await sessionStorage.hGetAll(redisKey);

    if(!storedRefreshToken){
        throw new UnauthroizeError('Refresh token not found');
    }

    if(storedRefreshToken.userId !== userId.toString()){
        await sessionStorage.del(redisKey);
        throw new UnauthroizeError('The refresh token does not belong to the user');
    }

    return await createUserSession(userId);
}

const createTokens = async (userId:number) =>{
    const refreshToken = await createUserRefresh(userId);
    const sessionToken = await createUserSession(userId);

    return {refreshToken,sessionToken};
}

const createUserRefresh = async (userId:number) =>{
    const refreshToken = jwt.sign({userId:userId,isAdmin:false},SECRET_KEY!,{expiresIn:'1d'});

    const redisKey = `refreshToken:${refreshToken}`;
    const ttl = 86400;

    await sessionStorage.sendCommand([
        'HSETEX',
        redisKey,
        'EX',String(ttl),
        'FIELDS','1',
        'userId',userId.toString()
    ]);
    
    return refreshToken;
}

const createUserSession = async (userId:number) =>{
    const sessionToken = jwt.sign({userId:userId,isAdmin:false},SECRET_KEY!,{expiresIn:'1h'});

    const redisKey = `sessionToken:${sessionToken}`;
    const ttl = 3600;
    
    const isShopOwner = await userHasRole(userId,SHOP_OWNER_ROLE_ID);

    await sessionStorage.sendCommand([
        'HSETEX',
        redisKey,
        'EX',String(ttl),
        'FIELDS','3',
        'userId',String(userId),
        'isShopOwner',String(isShopOwner),
        'isAdmin',String(false)
    ]);
    
    return sessionToken;
}