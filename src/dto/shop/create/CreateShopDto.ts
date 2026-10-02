export interface CreateShopDto{
    userId:number;
    name: string;
    address?: string;
    phoneNumber?: string;
    email: string;
    photoUrl?: string;
}