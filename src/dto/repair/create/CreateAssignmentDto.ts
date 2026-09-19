export interface CreateAssignmentDto{
    shopId:number;
    assignedAt?:string | Date;
    finishedAt?:string | Date;
    repairId:number;
    employeeId:number;
}