import z from "zod";

export const createStatus = z.object({
    body:z.object({
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateStatus = z.object({
    body:z.object({
        statusId:z.number().positive(),
        name:z.string().optional()
    }),
    query:z.object({}),
    params:z.object({})
});