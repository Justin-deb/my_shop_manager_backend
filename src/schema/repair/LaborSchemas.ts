import z from "zod";
import { idParam } from "../common/SearchParameters";

export const createLabor = z.object({
    body:z.object({
        description: z.string().optional(),
        hours: z.number().positive().or(z.string()).optional(),
        hourlyRate: z.number().positive().optional(),
        performedAt: z.coerce.date(),
        repairId: idParam
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateLabor = z.object({
    body:z.object({
        description: z.string().optional(),
        hours: z.number().optional(),
        hourlyRate: z.number().positive().optional(),
        performedAt: z.coerce.date().optional()
    }),
    query:z.object({}),
    params:z.object({
        shopId: idParam,
        repairId: idParam,
        laborId: idParam,
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        repairId:idParam,
        laborId:idParam
    })
});

export const findAllByRepairId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        repairId:idParam
    })
});