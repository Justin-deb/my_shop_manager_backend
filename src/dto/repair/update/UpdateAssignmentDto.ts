export interface UpdateAssignmentDto{
    id:number;
    shopId:number;
    finishedAt?:string | Date;
    employeeId:number;
}