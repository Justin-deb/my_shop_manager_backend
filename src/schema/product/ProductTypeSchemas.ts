import z from "zod";

export const createProductType = z.object({
    body:z.object({
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateProductType = z.object({
    body:z.object({
        productTypeId:z.number().positive(),
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});