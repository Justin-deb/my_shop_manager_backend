import z from "zod";
import { idParam } from "../common/SearchParameters";

export const createAssignment = z.object({
    body:z.object({
        shopId:idParam,
        assignedAt:z.coerce.date().optional(),
        finishedAt:z.coerce.date().optional(),
        repairId:idParam,
        employeeId:idParam
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateAssignment = z.object({
    body:z.object({
        finishedAt:z.coerce.date().optional(),
        employeeId:idParam.optional()
    }),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        assignmentId:idParam
    })
});

export const findAllByRepairId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        repairId:idParam
    })
});

export const findAllActiveByShopId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam
    })
});

export const findAllByEmployeeId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        employeeId:idParam
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        assingmentId:idParam
    })
});