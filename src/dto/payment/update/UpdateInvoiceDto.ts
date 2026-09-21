export interface UpdateInvoiceDto{
    shopId:number;
    invoiceId:number;
    subtotal?:number;
    tax?:number;
    discount?:number;
    total?:number;
}