export interface UpdateLaborDto{
    shopId:number;
    repairId:number;
    laborId:number
    description?: string;
    hours?:number;
    hourlyRate?:number;
    performedAt?:Date | string;
}