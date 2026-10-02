import z from "zod";

export const createWarehouse = z.object({
    body:z.object({
        shopId:z.number().positive(),
        pieceId:z.number().positive(),
        quantity:z.number().positive(),
        notes:z.string().optional()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateWarehouse = z.object({
    body:z.object({
        shopId:z.number().positive(),
        pieceId:z.number().positive(),
        quantity:z.number().positive().optional(),
        notes:z.string().optional()
    }),
    query:z.object({}),
    params:z.object({})
});