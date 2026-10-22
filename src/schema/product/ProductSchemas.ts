import z from "zod";
import { idParam, searchText } from "../common/SearchParameters.js";

export const createProduct = z.object({
    body:z.object({
        manufacturer:z.string(),
        model:z.string().optional(),
        productionYear:z.number().positive(),
        name:z.string(),
        photoUrl:z.string().optional(),
        productTypeId:idParam
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateProduct = z.object({
    body:z.object({
        manufacturer:z.string().optional(),
        model:z.string().optional(),
        productionYear:z.number().positive().optional(),
        name:z.string().optional(),
        photoUrl:z.string().optional(),
        productTypeId:idParam.optional()
    }),
    query:z.object({}),
    params:z.object({
        productId:idParam,
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        productId:idParam
    })
});

export const findByName = z.object({
    body:z.object({}).optional(),
    query:z.object({
        name:searchText
    }),
    params:z.object({})
});

export const findByProductionYear = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        productionYear:z.string().regex(/^\d+$/,{message:'Not a valid number'})
    })
});

export const findByModel = z.object({
    body:z.object({}).optional(),
    query:z.object({
        model:searchText
    }),
    params:z.object({})
});

export const findByManufacturer = z.object({
    body:z.object({}).optional(),
    query:z.object({
        manufacturer:searchText
    }),
    params:z.object({})
});