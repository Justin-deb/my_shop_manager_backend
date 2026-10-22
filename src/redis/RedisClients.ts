import { createClient } from 'redis';

const sessionStorage = createClient({
    url: process.env.REDIS_SESSION_URL || "redis://localhost:6379"
});

await sessionStorage.connect();

const cacheStorage = createClient({
    url: process.env.REDIS_CACHE_URL || "redis://localhost:6380"
});

await cacheStorage.connect();

export { sessionStorage, cacheStorage };