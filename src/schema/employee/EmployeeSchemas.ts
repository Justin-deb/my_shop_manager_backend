import z from "zod";
import { idParam, searchText } from "../common/SearchParameters";

export const createEmployee = z.object({
    body:z.object({
        userId:idParam,
        shopId:idParam,
        positionId:idParam
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateEmployee = z.object({
    body:z.object({
        positionId:idParam
    }),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        employeeId:idParam
    })
});

export const findAllByShopId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam
    })
});

export const findByName = z.object({
    body:z.object({}).optional(),
    query:z.object({
        name:searchText
    }),
    params:z.object({
        shopId:idParam
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        employeeId:idParam
    })
});