export interface CreatePaymentDto{
    paymentDate:Date;
    amount:number;
    reference?:string;
    invoiceId:number;
    paymentMethodId:number;
}