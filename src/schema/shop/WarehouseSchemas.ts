import z from "zod";
import { idParam } from "../common/SearchParameters.js";

export const createWarehouse = z.object({
    body:z.object({
        shopId:idParam,
        pieceId:idParam,
        quantity:z.number().positive(),
        notes:z.string().optional()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateWarehouse = z.object({
    body:z.object({
        quantity:z.number().positive().optional(),
        notes:z.string().optional()
    }),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        pieceId:idParam
    })
});

export const findAllByShopId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam
    })
});

export const findByPieceId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        pieceId:idParam
    })
});