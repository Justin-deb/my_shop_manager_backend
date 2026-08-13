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

export const create = (invoice:CreateInvoiceDto) =>{
    const newInvoce:InvoiceCreateInput = {
        repair:{
            connect:{
                repairId:invoice.repairId
            }
        },
        issueDate:invoice.issueDate,
        subtotal:invoice.subtotal,
        tax:invoice.tax,
        discount:invoice.discount,
        total:invoice.total
    }

    try {
        return invoiceRepository.create(newInvoce);
    } catch (error) {
        mapPrismaError(error,'Invoice');
    }
}

export const update = (invoice:UpdateInvoiceDto) =>{
    const newInvoice:InvoiceUpdateInput = {
        subtotal:invoice.subtotal,
        tax:invoice.tax,
        discount:invoice.discount,
        total:invoice.total,
    };

    try {
        return invoiceRepository.update(invoice.invoiceId,newInvoice);
    } catch (error) {
        mapPrismaError(error,'Invoice',invoice.invoiceId.toString());
    }
}

export const remove = (invoiceId:number) =>{
    try {
        return invoiceRepository.remove(invoiceId);
    } catch (error) {
        mapPrismaError(error,'Invoice',invoiceId.toString());
    }
}