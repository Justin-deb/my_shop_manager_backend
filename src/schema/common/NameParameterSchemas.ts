import z from "zod";

export const nameParameter = z.record(z.string(),z.string());