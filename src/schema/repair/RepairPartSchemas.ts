import z from "zod";

export const createRepairPart = z.object({
    body: z.object({
        quantity: z.number().positive().int(),
        unitPrice: z.number().positive().optional(),
        addedAt: z.coerce.date(),
        repairId: z.number().positive(),
        pieceId: z.number().positive()
    }),
    query: z.object({}),
    params: z.object({})
});

export const updateRepairPart = z.object({
    body: z.object({
        shopId: z.number().positive(),
        repairId: z.number().positive(),
        pieceId: z.number().positive(),
        quantity: z.number().positive().int().optional(),
        unitPrice: z.number().positive().optional(),
        addedAt: z.coerce.date().optional()
    }),
    query: z.object({}),
    params: z.object({})
});