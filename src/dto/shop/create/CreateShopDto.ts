export interface CreateShopDto{
    userId:number;
    name: string;
    address?: string | undefined;
    phoneNumber?: string | undefined;
    email?: string | undefined;
    photoUrl?: string | undefined;
}