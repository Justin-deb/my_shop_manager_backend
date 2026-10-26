import { UnauthroizeError } from "../../../exceptions/UnauthroizeError.js";
import { sessionStorage } from "../../../redis/RedisClients.js"

export const logout = async (authHeader:string,refreshToken:string) =>{
    if(!authHeader.startsWith('Bearer ')){
        throw new UnauthroizeError('Bad token provided');
    }
    const sessionToken = authHeader.split(' ')[1];

    const sessionRedisKey = `sessionToken:${sessionToken}`;
    const refreshRedisKey = `refreshToken:${refreshToken}`;

    await sessionStorage.del(sessionRedisKey);
    await sessionStorage.del(refreshRedisKey);
}