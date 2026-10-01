import z from "zod";

export const createPaymentStatus = z.object({
    body:z.object({
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updatePaymentStatus = z.object({
    body:z.object({
        paymentStatusId:z.number().positive(),
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});