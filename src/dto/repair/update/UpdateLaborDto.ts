export interface UpdateLaborDto{
    description?: string;
    hours?:number;
    hourlyRate?:number;
    performedAt?:Date | string;
}