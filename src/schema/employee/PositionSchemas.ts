import z from "zod";
import { idParam, searchText } from "../common/SearchParameters.js";

export const createPosition = z.object({
    body:z.object({
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updatePosition = z.object({
    body:z.object({
        name:z.string()
    }),
    query:z.object({}),
    params:z.object({
        positionId:idParam
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        positionId:idParam
    })
});

export const findByName = z.object({
    body:z.object({}).optional(),
    query:z.object({
        name:searchText
    }),
    params:z.object({})
});