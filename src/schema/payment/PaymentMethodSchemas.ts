import z from "zod";
import { idParam, searchText } from "../common/SearchParameters.js";

export const createPaymentMethod = z.object({
    body:z.object({
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updatePaymentMethod = z.object({
    body:z.object({
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({
        paymentMethodId:idParam
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        paymentMethodId:idParam
    })
});

export const findByName = z.object({
    body:z.object({}).optional(),
    query:z.object({
        name:searchText
    }),
    params:z.object({})
});