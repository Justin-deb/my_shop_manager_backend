import z from "zod";

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
        pieceId:z.number().positive(),
        details:z.string()
    }),
    query:z.object({}),
    params:z.object({})
});