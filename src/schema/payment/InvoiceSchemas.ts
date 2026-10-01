import z from "zod";

export const createInvoice = z.object({
    body:z.object({
        repairId:z.number().positive(),
        issueDate: z.date(),
        subtotal: z.number().positive(),
        tax:z.number().positive().optional(),
        discount:z.number().positive().optional(),
        total:z.number().positive().optional()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateInvoice = z.object({
    body:z.object({
        shopId:z.number().positive(),
        invoiceId:z.number().positive(),
        subtotal:z.number().positive().optional(),
        tax:z.number().positive().optional(),
        discount:z.number().positive().optional(),
        total:z.number().positive().optional()
    }),
    query:z.object({}),
    params:z.object({})
});