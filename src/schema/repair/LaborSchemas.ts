import z from "zod";

export const createLabor = z.object({
    body:z.object({
        description: z.string().optional(),
        hours: z.number().positive().or(z.string()).optional(),
        hourlyRate: z.number().positive().optional(),
        performedAt: z.date().or(z.string()),
        repairId: z.number().positive()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateLabor = z.object({
    body:z.object({
        shopId: z.number().positive(),
        repairId: z.number().positive(),
        laborId: z.number().positive(),
        description: z.string().optional(),
        hours: z.number().optional(),
        hourlyRate: z.number().positive().optional(),
        performedAt: z.date().or(z.string()).optional()
    }),
    query:z.object({}),
    params:z.object({})
});