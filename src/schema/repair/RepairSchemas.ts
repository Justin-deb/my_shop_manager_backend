import z from "zod";

export const createRepair = z.object({
    body: z.object({
        estimatedHours: z.number().positive().optional(),
        workedHours: z.number().positive().optional(),
        receivedDate: z.coerce.date(),
        finishDate: z.coerce.date().optional(),
        returnDate: z.coerce.date().optional(),
        notes: z.string().optional(),
        problemDescription: z.string(),
        productId:z.number().positive(),
        shopId:z.number().positive(),
        statusId:z.number().positive(),
        customerId:z.number().positive()
    }),
    query: z.object({}),
    params: z.object({})
});

export const updateRepair = z.object({
    body: z.object({
        shopId:z.number().positive(),
        repairId:z.number().positive(),
        estimatedHours:z.number().positive().optional(),
        workedHours:z.number().positive().optional(),
        receivedDate:z.coerce.date().optional(),
        finishDate: z.coerce.date().optional(),
        returnDate: z.coerce.date().optional(),
        notes: z.string().optional(),
        problemDescription: z.string().optional(),
        statusId:z.number().positive()
    }),
    query: z.object({}),
    params: z.object({})
});