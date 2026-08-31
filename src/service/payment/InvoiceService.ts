import { mapPrismaError } from '../../common/utils/ErrorWrapper';
import { CreateInvoiceDto } from '../../dto/payment/create/CreateInvoiceDto';
import { UpdateInvoiceDto } from '../../dto/payment/update/UpdateInvoiceDto';
import { InvoiceCreateInput, InvoiceUpdateInput } from '../../generated/prisma/models';
import * as invoiceRepository from '../../repository/payment/InvoiceRepository';

export const findAllByRepairId = (repairId:number) =>{
    return invoiceRepository.findAllByRepairId(repairId);
}

export const findById = (invoiceId:number) =>{
    try {
        return invoiceRepository.findById(invoiceId);
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

export const update = (dto:UpdateInvoiceDto) =>{
    const newInvoice:InvoiceUpdateInput = {
        subtotal:dto.subtotal,
        tax:dto.tax,
        discount:dto.discount,
        total:dto.total,
    };

    try {
        return invoiceRepository.update(dto.invoiceId,newInvoice);
    } catch (error) {
        mapPrismaError(error,'Invoice',dto.invoiceId.toString());
    }
}

export const remove = (invoiceId:number) =>{
    try {
        return invoiceRepository.remove(invoiceId);
    } catch (error) {
        mapPrismaError(error,'Invoice',invoiceId.toString());
    }
}