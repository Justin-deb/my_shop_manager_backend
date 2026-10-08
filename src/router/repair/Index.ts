import { Router } from "express";
import assignmentRouter from "./AssignmentRouter";
import laborRouter from "./LaborRouter";
import repairPartRouter from "./RepairPartRouter";
import repairRouter from "./RepairRouter";
import statusRouter from "./StatusRouter";

const repairIndexRouter = Router();

repairIndexRouter.use('/repair',assignmentRouter);

repairIndexRouter.use('/repair',laborRouter);

repairIndexRouter.use('/repair',repairPartRouter);

repairIndexRouter.use('/repair',repairRouter);

repairIndexRouter.use('/repair',statusRouter);

export default repairIndexRouter;