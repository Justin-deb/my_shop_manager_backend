import { mapPrismaError } from "../../common/utils/ErrorWrapper.js";
import { CreateInvoiceDto } from "../../dto/payment/create/CreateInvoiceDto.js";
import { UpdateInvoiceDto } from "../../dto/payment/update/UpdateInvoiceDto.js";
import { InvoiceCreateInput, InvoiceUpdateInput } from "../../generated/prisma/models.js";
import * as invoiceRepository from "../../repository/payment/InvoiceRepository.js";

export const findAllByRepairId = (shopId:number,repairId:number) =>{
    return invoiceRepository.findAllByRepairId(shopId,repairId);
}

export const findById = (shopId:number,invoiceId:number) =>{
    try {
        return invoiceRepository.findById(shopId,invoiceId);
    } catch (error) {
        mapPrismaError(error,'Invoice',invoiceId.toString());
    }
}

export const create = (dto:CreateInvoiceDto) =>{
    const newInvoce:InvoiceCreateInput = {
        repair:{
            connect:{
                repairId:dto.repairId
            }
        },
        issueDate:dto.issueDate,
        subtotal:dto.subtotal,
        tax:dto.tax,
        discount:dto.discount,
        total:dto.total
    }

    try {
        return invoiceRepository.create(newInvoce);
    } catch (error) {
        mapPrismaError(error,'Invoice');
    }
}

export const update = (shopId:number,invoiceId:number,dto:UpdateInvoiceDto) =>{
    const newInvoice:InvoiceUpdateInput = {
        subtotal:dto.subtotal,
        tax:dto.tax,
        discount:dto.discount,
        total:dto.total,
    };

    try {
        return invoiceRepository.update(shopId,invoiceId,newInvoice);
    } catch (error) {
        mapPrismaError(error,'Invoice',invoiceId.toString());
    }
}

export const remove = (shopId:number,invoiceId:number) =>{
    try {
        return invoiceRepository.remove(shopId,invoiceId);
    } catch (error) {
        mapPrismaError(error,'Invoice',invoiceId.toString());
    }
}