import { Router } from "express";
import employeeRouter from "../EmployeeRouter.js";
import positionRouter from "../PositionRouter.js";

const employeeIndexRouter = Router()

employeeIndexRouter.use('/employee',employeeRouter);

employeeIndexRouter.use('/employee',positionRouter);

export default employeeIndexRouter;