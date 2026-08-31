export interface CreateCustomerProductDto{
    serialNumber?:string;
    name?:string;
    customerId:number;
    productId:number;
    shopId:number;
}