import z from "zod";
import { idParam } from "../common/SearchParameters.js";

export const createUser = z.object({
    body:z.object({
        firstName:z.string(),
        middleName:z.string().optional(),
        lastName:z.string(),
        secondLastName:z.string(),
        email:z.email(),
        password:z.string(),
        roleId:idParam
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateUser = z.object({
    body:z.object({
        firstName:z.string().optional(),
        middleName:z.string().optional(),
        lastName:z.string().optional(),
        secondLastName:z.string().optional()
    }),
    query:z.object({}),
    params:z.object({
        userId:idParam,
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        userId:idParam
    })
});

export const findByEmail = z.object({
    body:z.object({}).optional(),
    query:z.object({
        email:z.email()
    }),
    params:z.object({})
});