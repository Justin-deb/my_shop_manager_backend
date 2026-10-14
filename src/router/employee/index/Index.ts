import { Router } from "express";
import employeeRouter from "./EmployeeRouter";
import positionRouter from "./PositionRouter";

const employeeIndexRouter = Router()

employeeIndexRouter.use('/employee',employeeRouter);

employeeIndexRouter.use('/employee',positionRouter);

export default employeeIndexRouter;