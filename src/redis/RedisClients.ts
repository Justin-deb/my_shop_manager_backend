import { createClient } from 'redis';

const sessionStorage = createClient({
    url: process.env.REDIS_SESSION_URL || "redis://localhost:6379"
});

const cacheStorage = createClient({
    url: process.env.REDIS_CACHE_URL || "redis://localhost:6380"
});

try {
    await sessionStorage.connect();
    await cacheStorage.connect();    
} catch (error) {
    console.error('Cannot find redis servers',error)
}

export { sessionStorage, cacheStorage };