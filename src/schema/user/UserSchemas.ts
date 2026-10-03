import z from "zod";

export const createUser = z.object({
    body:z.object({
        firstName:z.string(),
        middleName:z.string().optional(),
        lastName:z.string(),
        secondLastName:z.string(),
        email:z.string(),
        password:z.string(),
        roleId:z.number().positive()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateUser = z.object({
    body:z.object({
        userId:z.number(),
        firstName:z.string().optional(),
        middleName:z.string().optional(),
        lastName:z.string().optional(),
        secondLastName:z.string().optional(),
        roleId:z.number().positive().optional()
    }),
    query:z.object({}),
    params:z.object({})
});