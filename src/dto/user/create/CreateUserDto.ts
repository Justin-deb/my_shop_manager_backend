export interface CreateUserDto{
    firstName: string;
    middleName?: string;
    lastName: string;
    secondLastName: string;
    email: string;
    password: string;
    roleId: number;
}