import z from "zod";
import { idParam } from "../common/SearchParameters";

export const createShop = z.object({
    body:z.object({
        userId:idParam,
        name:z.string(),
        address:z.string().optional(),
        phoneNumber:z.string().optional(),
        email:z.email,
        photoUrl:z.string().optional()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateShop = z.object({
    body:z.object({
        name:z.string().optional(),
        address:z.string().optional(),
        phoneNumber:z.string().optional(),
        email:z.email().optional(),
        photoUrl:z.string().optional()
    }),
    query:z.object({}),
    params:z.object({
        shopId:idParam
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam
    })
});

export const findByOwnerId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        ownerId:idParam
    })
});