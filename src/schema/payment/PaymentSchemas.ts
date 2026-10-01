import z from "zod";

export const createPayment = z.object({
    body:z.object({
        paymentDate:z.date(),
        amount:z.number().positive(),
        reference:z.string().optional(),
        invoiceId:z.number().positive(),
        paymentMethodId:z.number().positive(),
        paymentStatusId:z.number().positive()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updatePayment = z.object({
    body:z.object({
        shopId:z.number().positive(),
        invoiceId:z.number().positive(),
        paymentId:z.number().positive(),
        statusId:z.number().positive()
    }),
    query:z.object({}),
    params:z.object({})
});