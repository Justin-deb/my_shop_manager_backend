export interface UpdateUserDto{
    userId:number;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    secondLastName?: string;
    password?: string;
    phoneNumber?: string;
    roleId: number;
}