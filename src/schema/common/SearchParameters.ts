import z from "zod";

//Only numbers
export const numberParameter = z.record(z.string(),z.number().positive());

//Number and string
export const numberOrStringParameter = z.record(
                                    z.string(),
                                    z.number().positive().or(z.string()));

//Only strings
export const stringParameter = z.record(z.string(),z.string());