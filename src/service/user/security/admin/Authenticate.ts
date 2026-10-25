import { NotFoundError } from '../../../../exceptions/NotFoundError.js';
import { UnauthroizeError } from '../../../../exceptions/UnauthroizeError.js';
import { sessionStorage } from '../../../../redis/RedisClients.js';
import * as userRolesService from '../../UserRolesService.js';
import jwt from 'jsonwebtoken';
import { comparePassword } from '../../UserService.js';

const SECRET_KEY = process.env.SECRET_KEY;
const USER_ROLE_ID = 2;
const ADMIN_ROLE_ID = 4;

export const adminRegister = async (userId:number) =>{
    if(!userRolesService.userHasRole(userId,USER_ROLE_ID)){
        throw new NotFoundError(`User not found with the id ${userId}`);
    }

    await userRolesService.create(userId,ADMIN_ROLE_ID);
}

export const adminLogin = async (userId:number,password:string) =>{
    if(!(await comparePassword(userId,password))){
        throw new UnauthroizeError('Invalid credentials');
    }

    const isAdmin = await userRolesService.userHasRole(userId,ADMIN_ROLE_ID);

    if(!isAdmin){
        throw new UnauthroizeError('Not system administrator');
    }

    return createTokens;
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

    return await createAdminSession(userId);
}

const createTokens = async (userId:number) =>{
    const refreshToken = await createAdminRefresh(userId);
    const sessionToken = await createAdminSession(userId);

    return {refreshToken,sessionToken};
};

const createAdminSession = async (userId:number) =>{
    const sessionToken = jwt.sign({userId:userId,isAdmin:true},SECRET_KEY!,{expiresIn:'1h'});

    const redisKey = `sessionToken:${sessionToken}`;
    const ttl = 3600;

    await sessionStorage.sendCommand([
        'HSETEX',
        redisKey,
        'EX',String(ttl),
        'FIELDS','1',
        'userId',String(userId),
    ]);
    
    return sessionToken;
}

const createAdminRefresh = async (userId:number) =>{
    const refreshToken = jwt.sign({userId:userId,isAdmin:true},SECRET_KEY!,{expiresIn:'1d'});

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