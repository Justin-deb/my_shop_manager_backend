export interface CreateInvoiceDto{
    repairId:number;
    issueDate: Date;
    subtotal: number;
    tax?:number;
    discount?: number;
    total?: number;
}