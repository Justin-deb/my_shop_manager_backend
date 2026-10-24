import { UnauthroizeError } from "../../../../exceptions/UnauthroizeError.js"
import { sessionStorage } from "../../../../redis/RedisClients.js";
import { findByName } from "../../RoleService.js";
import { userHasRole } from "../../UserRolesService.js";
import { comparePassword } from "../../UserService.js"
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

export const userLogin = async (userId:number,password:string) =>{
    if(!(await comparePassword(userId,password))){
        throw new UnauthroizeError('Invalid credentials');
    }

    const refreshToken = await createUserRefresh(userId);
    const sessionToken = await createUserSession(userId);

    return {refreshToken,sessionToken};
}

export const refreshSessionToken = async (userId:number,refreshToken:string) =>{
    const redisKey = `refreshToken:${refreshToken}`;

    const storedRefreshToken = await sessionStorage.hGetAll(redisKey);

    if(storedRefreshToken.userId !== userId.toString()){
        await sessionStorage.del(redisKey);
        throw new UnauthroizeError('The refresh token does not belong to the user');
    }

    return await createUserSession(userId);
}

const createUserRefresh = async (userId:number) =>{
    const refreshToken = jwt.sign({userId},SECRET_KEY!,{expiresIn:'1d'});

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
    const sessionToken = jwt.sign({userId},SECRET_KEY!,{expiresIn:'1h'});

    const redisKey = `sessionToken:${sessionToken}`;
    const ttl = 3600;

    const shopRoleId = await findByName('SHOP_OWNER');
    
    const isShopOwner = await userHasRole(userId,shopRoleId[0].roleId);

    await sessionStorage.sendCommand([
        'HSETEX',
        redisKey,
        'EX',String(ttl),
        'FIELDS','3',
        'userId',String(userId),
        'isUser',String(true),
        'isShopOwner',String(isShopOwner)
    ]);
    
    return sessionToken;
}