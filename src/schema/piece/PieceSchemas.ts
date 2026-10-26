import z from "zod";
import { idParam, searchText } from "../common/SearchParameters.js";

export const createPiece = z.object({
    body:z.object({
        name:z.string(),
        details:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updatePiece = z.object({
    body:z.object({
        details:z.string()
    }),
    query:z.object({}),
    params:z.object({
        pieceId:idParam,
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        pieceId:idParam
    })
});

export const findByName = z.object({
    body:z.object({}).optional(),
    query:z.object({
        name:searchText
    }),
    params:z.object({})
});