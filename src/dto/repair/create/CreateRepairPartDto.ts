export interface CreateRepairPartDto{
    quantity:number;
    unitPrice?:number;
    addedAt:Date | string;
    repairId:number;
    pieceId:number;
}