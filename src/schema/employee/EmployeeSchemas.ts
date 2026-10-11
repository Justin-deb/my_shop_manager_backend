import z from "zod";
import { id, searchText } from "../common/SearchParameters";

export const createEmployee = z.object({
    body:z.object({
        userId:z.number().positive(),
        shopId:z.number().positive(),
        positionId:z.number().positive()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateEmployee = z.object({
    body:z.object({
        shopId:z.number().positive(),
        userId:z.number().positive(),
        positionId:z.number().positive()
    }),
    query:z.object({}),
    params:z.object({})
});

export const findAllByShopId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:id
    })
});

export const findByName = z.object({
    body:z.object({}).optional(),
    query:z.object({
        name:searchText
    }),
    params:z.object({
        shopId:id
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:id,
        employeeId:id
    })
});