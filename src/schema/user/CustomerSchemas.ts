import z from "zod";

export const createCustomer = z.object({
    body:z.object({
        shopId:z.number().positive(),
        firstName:z.string(),
        middleName:z.string().optional(),
        lastName:z.string(),
        secondLastName:z.string(),
        phoneNumber:z.string(),
        email:z.string().optional()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateCustomer = z.object({
    body:z.object({
        shopId:z.number().positive(),
        customerId:z.number().positive(),
        email:z.string().optional(),
        phoneNumber:z.string().optional()
    }),
    query:z.object({}),
    params:z.object({})
});

export const fullName = z.object({
    body:z.object({
        shopId:z.number().positive(),
        firstName:z.string(),
        middleName:z.string().optional(),
        lastName:z.string(),
        secondLastName:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});