import z from "zod";
import { idParam } from "../common/SearchParameters.js";

export const createCustomer = z.object({
    body:z.object({
        shopId:idParam,
        firstName:z.string(),
        middleName:z.string().optional(),
        lastName:z.string(),
        secondLastName:z.string(),
        phoneNumber:z.string(),
        email:z.email().optional()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateCustomer = z.object({
    body:z.object({
        email:z.email().optional(),
        phoneNumber:z.string().optional()
    }),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        customerId:idParam,
    })
});

export const fullName = z.object({
    body:z.object({}).optional(),
    query:z.object({
        firstName:z.string(),
        middleName:z.string().optional(),
        lastName:z.string(),
        secondLastName:z.string()
    }),
    params:z.object({
        shopId:idParam,
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        customerId:idParam
    })
});