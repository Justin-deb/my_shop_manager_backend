import z from "zod";
import { idParam } from "../common/SearchParameters.js";

export const createInvoice = z.object({
    body:z.object({
        repairId:idParam,
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
        subtotal:z.number().positive().optional(),
        tax:z.number().positive().optional(),
        discount:z.number().positive().optional(),
        total:z.number().positive().optional()
    }),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        invoiceId:idParam
    })
});

export const findAllByRepairId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        reapirId:idParam
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        invoiceId:idParam
    })
});