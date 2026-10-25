import { Router } from "express";
import adminAuthRouter from "./admin/AdminAuthRouter.js";
import userAuthRouter from "./user/UserAuthRouter.js";
import authRouter from "./common/AuthRouter.js";

const authIndexRouter = Router();

authIndexRouter.use('/auth',adminAuthRouter);

authIndexRouter.use('/auth',userAuthRouter);

authIndexRouter.use('/auth',authRouter);

export default authIndexRouter;