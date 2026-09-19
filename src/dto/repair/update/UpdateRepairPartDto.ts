export interface UpdateRepairPartDto{
    shopId:number;
    repairId:number;
    pieceId:number;
    quantity?:number;
    unitPrice?:number;
    addedAt?:Date | string;
}