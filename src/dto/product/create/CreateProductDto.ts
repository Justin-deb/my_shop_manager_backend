export interface CreateProductDto{
    manufacturer: string;
    model?: string;
    productionYear: number;
    name: string;
    photoUrl?: string;
    productTypeId: number;
}