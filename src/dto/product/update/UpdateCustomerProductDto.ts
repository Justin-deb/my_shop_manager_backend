export interface UpdateCustomerProductDto{
    customerId:number;
    productId:number;
    serialNumber?:string;
    name?:string;
}