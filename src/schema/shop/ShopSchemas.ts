import z from "zod";

export const createShop = z.object({
    body:z.object({
        userId:z.number().positive(),
        name:z.string(),
        address:z.string().optional(),
        phoneNumber:z.string().optional(),
        email:z.string(),
        photoUrl:z.string().optional()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateShop = z.object({
    body:z.object({
        shopId:z.number().positive(),
        name:z.string().optional(),
        address:z.string().optional(),
        phoneNumber:z.string().optional(),
        email:z.string().optional(),
        photoUrl:z.string().optional()
    }),
    query:z.object({}),
    params:z.object({})
});