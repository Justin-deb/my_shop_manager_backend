import z from "zod";

export const idParameter = z.record(z.string(),z.number().positive());