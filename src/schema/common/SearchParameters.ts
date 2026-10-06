import z from "zod";

//Only id numbers
export const idParameter = z.record(z.string(),z.number().positive());

//id number and a string
export const idNameParameter = z.record(
                                    z.string(),
                                    z.number().positive().or(z.string()));

//Only strings
export const nameParameter = z.record(z.string(),z.string());