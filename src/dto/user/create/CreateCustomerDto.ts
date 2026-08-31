export interface CreateCustomerDto{
    shopId:number;
    firstName:string;
    middleName?:string;
    lastName:string;
    secondLastName:string;
    phoneNumber:string;
    email?:string;
}