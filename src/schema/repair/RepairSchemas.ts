import z from "zod";
import { idParam } from "../common/SearchParameters";

export const createRepair = z.object({
    body: z.object({
        estimatedHours: z.number().positive().optional(),
        workedHours: z.number().positive().optional(),
        receivedDate: z.coerce.date(),
        finishDate: z.coerce.date().optional(),
        returnDate: z.coerce.date().optional(),
        notes: z.string().optional(),
        problemDescription: z.string(),
        productId:idParam,
        shopId:idParam,
        statusId:idParam,
        customerId:idParam
    }),
    query: z.object({}),
    params: z.object({})
});

export const updateRepair = z.object({
    body: z.object({
        estimatedHours:z.number().positive().optional(),
        workedHours:z.number().positive().optional(),
        receivedDate:z.coerce.date().optional(),
        finishDate: z.coerce.date().optional(),
        returnDate: z.coerce.date().optional(),
        notes: z.string().optional(),
        problemDescription: z.string().optional(),
        statusId:idParam
    }),
    query: z.object({}),
    params: z.object({
        shopId:idParam,
        repairId:idParam,
    })
});

export const findAllByShopId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        repairId:idParam
    })
});

export const findAllByStatusId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        statusId:idParam
    })
});

export const findAllByCustomerId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        customerId:idParam
    })
});