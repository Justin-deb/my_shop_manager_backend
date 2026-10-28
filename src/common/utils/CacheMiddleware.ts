import { Request,Response,NextFunction } from "express";
import { cacheStorage } from "../../redis/RedisClients.js";

export const cacheMiddleware = (namespace:string,duration:number = 900) =>{
    return async (req:Request,res:Response,next:NextFunction) =>{
        const method = req.method;
        const redisKey = `${namespace}:${req.originalUrl}`

        if(method !== 'GET'){
            //Invalidate cache
            void invalidateCache(namespace);
            return next();
        }

        let cache:string|null = null;
        
        try {
            cache = await cacheStorage.get(redisKey);
        } catch (error) {
            console.error("Cache write failed:", error);
        }

        if(cache){
            res.set('X-Cache','HIT');
            return res.json(JSON.parse(cache));
        }

        res.set('X-Cache','MISS');

        //Overwrite (Hijack) res.json caching pattern
        const originalJson = res.json.bind(res);

        res.json = (body) =>{
            if(res.statusCode === 200){
                void cacheStorage.set(redisKey,JSON.stringify(body),{expiration:{type:'EX',value:duration}}).catch((error) => {console.error("Cache write failed:", error);});
            }

            return originalJson(body);
        }

        return next();
    }
}

const invalidateCache = async (namespace: string) => {
    let cursor = "0";

    do {
        const result = await cacheStorage.scan(cursor, {
            MATCH: `${namespace}:*`,
            COUNT: 100
        });

        cursor = result.cursor;

        if (result.keys.length > 0) {
            await cacheStorage.del(result.keys);
        }
    } while (cursor !== "0");
};