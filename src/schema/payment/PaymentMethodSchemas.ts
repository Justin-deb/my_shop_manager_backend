import z from "zod";

export const createPaymentMethod = z.object({
    body:z.object({
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updatePaymentMethod = z.object({
    body:z.object({
        paymentMethodId:z.number().positive(),
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});