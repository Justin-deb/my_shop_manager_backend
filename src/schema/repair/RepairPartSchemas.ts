import z from "zod";
import { idParam } from "../common/SearchParameters";

export const createRepairPart = z.object({
    body: z.object({
        quantity: z.number().positive().int(),
        unitPrice: z.number().positive().optional(),
        addedAt: z.coerce.date(),
        repairId: idParam,
        pieceId: idParam
    }),
    query: z.object({}),
    params: z.object({})
});

export const updateRepairPart = z.object({
    body: z.object({
        quantity: z.number().positive().int().optional(),
        unitPrice: z.number().positive().optional(),
        addedAt: z.coerce.date().optional()
    }),
    query: z.object({}),
    params: z.object({
        shopId: idParam,
        repairId: idParam,
        pieceId: idParam,
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

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        repairId:idParam,
        pieceId:idParam
    })
});