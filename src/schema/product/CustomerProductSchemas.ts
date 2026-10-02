import z from "zod";

export const createCustomerProduct = z.object({
    body:z.object({
        serialNumber:z.string().optional(),
        name:z.string().optional(),
        customerId:z.number().positive(),
        productId:z.number().positive(),
        shopId:z.number().positive()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateCustomerProduct = z.object({
    body:z.object({
        shopId:z.number().positive(),
        customerId:z.number().positive(),
        productId:z.number().positive(),
        serialNumber:z.string().optional(),
        name:z.string().optional()
    }),
    query:z.object({}),
    params:z.object({})
});