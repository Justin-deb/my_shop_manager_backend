export interface UpdateAssignmentDto{
    assignmentId:number;
    shopId:number;
    finishedAt?:string | Date;
    employeeId:number;
}