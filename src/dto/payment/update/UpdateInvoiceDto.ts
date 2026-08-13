export interface UpdateInvoiceDto{
    invoiceId:number;
    subtotal?:number;
    tax?:number;
    discount?:number;
    total?:number;
}