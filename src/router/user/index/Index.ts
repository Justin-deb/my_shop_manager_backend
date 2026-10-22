import { Router } from "express";
import customerRouter from "../CustomerRouter.js";
import roleRouter from "../RoleRouter.js";
import userRouter from "../UserRouter.js";
import userRolesRouter from "../UserRoleRouter.js";

const userIndexRouter = Router();

userIndexRouter.use('/user',customerRouter);

userIndexRouter.use('/user',roleRouter);

userIndexRouter.use('/user',userRouter);

userIndexRouter.use('/user',userRolesRouter);

export default userIndexRouter;