import z from "zod";
import { idParam } from "../common/SearchParameters.js";

export const createCustomerProduct = z.object({
    body:z.object({
        serialNumber:z.string().optional(),
        name:z.string().optional(),
        customerId:idParam,
        productId:idParam,
        shopId:idParam
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateCustomerProduct = z.object({
    body:z.object({
        serialNumber:z.string().optional(),
        name:z.string().optional()
    }),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        customerId:idParam,
        productId:idParam,
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        customerId:idParam,
        productId:idParam
    })
});

export const findByCustomerId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        customerId:idParam
    })
});

export const findByProductId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        productId:idParam
    })
});