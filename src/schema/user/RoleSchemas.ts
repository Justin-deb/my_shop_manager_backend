import z from "zod";

export const createRole = z.object({
    body:z.object({
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateRole = z.object({
    body:z.object({
        roleId:z.number().positive(),
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});