import z from "zod";
import { idParam, searchText } from "../common/SearchParameters.js";

export const createProductType = z.object({
    body:z.object({
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateProductType = z.object({
    body:z.object({
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({
        productTypeId:idParam,
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        productTypeId:idParam
    })
});

export const findByName = z.object({
    body:z.object({}).optional(),
    query:z.object({
        name:searchText
    }),
    params:z.object({})
});