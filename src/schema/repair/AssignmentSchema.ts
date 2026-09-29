import z from "zod";

export const createAssignment = z.object({
    body:z.object({
        shopId:z.number().positive(),
        assignedAt:z.date().or(z.string()).optional(),
        finishedAt:z.date().or(z.string()).optional(),
        repairId:z.number().positive(),
        employeeId:z.number().positive()
    }),
    query:z.object({}),
    params:z.object({})
});

export const updateAssignment = z.object({
    body:z.object({
        assignmentId:z.number().positive(),
        shopId:z.number().positive(),
        finishedAt:z.date().or(z.string()).optional(),
        employeeId:z.number()
    }),
    query:z.object({}),
    params:z.object({})
});