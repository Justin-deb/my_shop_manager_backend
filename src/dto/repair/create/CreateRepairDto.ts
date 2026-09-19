export interface CreateRepairDto{
    estimatedHours?:number;
    workedHours?:number;
    receivedDate: Date | string;
    finishDate?: Date | string;
    returnDate?: Date | string;
    notes?: string;
    problemDescription: string;
    productId:number;
    shopId:number;
    statusId:number;
    customerId:number;
}