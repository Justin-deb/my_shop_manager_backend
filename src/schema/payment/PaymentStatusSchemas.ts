import z from "zod";
import { idParam, searchText } from "../common/SearchParameters";

export const createPaymentStatus = z.object({
    body:z.object({
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updatePaymentStatus = z.object({
    body:z.object({
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({
        paymentStatusId:idParam,
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        paymentStatusId:idParam
    })
});

export const findByName = z.object({
    body:z.object({}).optional(),
    query:z.object({
        name:searchText
    }),
    params:z.object({})
});