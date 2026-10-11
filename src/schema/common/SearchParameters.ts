import z from "zod";

export const id = z.string().regex(/^\d+$/,{message:'Not a valid number'});

export const searchText = z.string().trim().min(1);
export const searchTextOptional = searchText.optional();

//Only numbers
export const numberParameter = z.record(z.string(),z.number().positive());

//Number and string
export const numberOrStringParameter = z.record(
                                    z.string(),
                                    z.number().positive().or(z.string())).optional();

//Only strings
export const stringParameter = z.record(z.string(),z.string().optional());
