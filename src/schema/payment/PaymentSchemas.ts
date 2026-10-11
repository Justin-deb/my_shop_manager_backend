import z from "zod";
import { idParam, searchText } from "../common/SearchParameters";

export const createPayment = z.object({
    body:z.object({
        paymentDate:z.date(),
        amount:z.number().positive(),
        reference:z.string().optional(),
        invoiceId:idParam,
        paymentMethodId:idParam,
        paymentStatusId:idParam
    }),
    query:z.object({}),
    params:z.object({})
});

export const updatePayment = z.object({
    body:z.object({
        statusId:idParam
    }),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        invoiceId:idParam,
        paymentId:idParam
    })
});

export const findAllByInvoiceId = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        invoiceId:idParam
    })
});

export const findById = z.object({
    body:z.object({}).optional(),
    query:z.object({}),
    params:z.object({
        shopId:idParam,
        invoiceId:idParam,
        paymentId:idParam
    })
});

export const findByReference = z.object({
    body:z.object({}).optional(),
    query:z.object({
        reference:searchText
    }),
    params:z.object({
        shopId:idParam,
        invoiceId:idParam
    })
});