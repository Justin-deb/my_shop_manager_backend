import z from "zod";

export const createPosition = z.object({
    body:z.object({
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updatePosition = z.object({
    body:z.object({
        positionId:z.number().positive(),
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});