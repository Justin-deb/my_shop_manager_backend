export interface CreateLaborDto{
    description?: string;
    hours?: string | number;
    hourlyRate?:number;
    performedAt: Date | string;
    repairId:number;
}