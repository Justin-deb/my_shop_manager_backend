import z from "zod";
import { idParam } from "../common/SearchParameters.js";

export const findByUserId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        userId:idParam
    })
});

export const findByRoleId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        roleId:idParam
    })
});

export const userIdRoleId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        userId:idParam,
        roleId:idParam
    })
});