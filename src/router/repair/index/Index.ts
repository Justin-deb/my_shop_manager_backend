import { Router } from "express";
import assignmentRouter from "../AssignmentRouter.js";
import laborRouter from "../LaborRouter.js";
import repairPartRouter from "../RepairPartRouter.js";
import repairRouter from "../RepairRouter.js";
import statusRouter from "../StatusRouter.js";

const repairIndexRouter = Router();

repairIndexRouter.use('/repair',assignmentRouter);

repairIndexRouter.use('/repair',laborRouter);

repairIndexRouter.use('/repair',repairPartRouter);

repairIndexRouter.use('/repair',repairRouter);

repairIndexRouter.use('/repair',statusRouter);

export default repairIndexRouter;