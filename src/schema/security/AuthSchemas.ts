import z from "zod";
import { idParam } from "../common/SearchParameters.js";

export const registerAdminSchema = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        userId:idParam
    }),
});

export const loginSchema = z.object({
    body:z.object({}).optional,
    query:z.object({
        password:z.string()
    }),
    params:z.object({
        userId:idParam
    }),
});

export const refreshSchema = z.object({
    params:z.object({
        userId:idParam
    }),
    cookies:z.object({
        refreshToken:z.string().nonempty({error:'No cookie provided'})
    })
});

export const authSchema = z.object({
    headers:z.object({
        authorization:z.string().nonempty({error:'No headers provided'})
    }),
    cookies:z.object({
        refreshToken:z.string().nonempty({error:'No cookie provided'})
    })
});