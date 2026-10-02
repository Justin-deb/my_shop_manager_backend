export interface UpdateProductDto{
    productId:number;
    manufacturer?: string;
    model?: string;
    productionYear?: number;
    name?: string;
    photoUrl?: string;
    productTypeId?: number;
}