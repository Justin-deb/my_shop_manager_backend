import z from "zod";

export const createEmployee = z.object({
    body:z.object({
        userId:z.number().positive(),
        shopId:z.number().positive(),
        positionId:z.number().positive()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateEmployee = z.object({
    body:z.object({
        shopId:z.number().positive(),
        userId:z.number().positive(),
        positionId:z.number().positive()
    }),
    query:z.object({}),
    params:z.object({})
});