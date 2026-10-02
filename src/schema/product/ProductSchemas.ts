import z from "zod";

export const createProduct = z.object({
    body:z.object({
        manufacturer:z.string(),
        model:z.string().optional(),
        productionYear:z.number().positive(),
        name:z.string(),
        photoUrl:z.string().optional(),
        productTypeId:z.number().positive()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateProduct = z.object({
    body:z.object({
        productId:z.number().positive(),
        manufacturer:z.string().optional(),
        model:z.string().optional(),
        productionYear:z.number().positive().optional(),
        name:z.string().optional(),
        photoUrl:z.string().optional(),
        productTypeId:z.number().positive().optional()
    }),
    query:z.object({}),
    params:z.object({})
});