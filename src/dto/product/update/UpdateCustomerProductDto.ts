export interface UpdateCustomerProductDto{
    shopId:number;
    customerId:number;
    productId:number;
    serialNumber?:string;
    name?:string;
}