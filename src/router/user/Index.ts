import { Router } from "express";
import customerRouter from "./CustomerRouter";
import roleRouter from "./RoleRouter";
import userRouter from "./UserRouter";

const userIndexRouter = Router();

userIndexRouter.use('/user',customerRouter);

userIndexRouter.use('/user',roleRouter);

userIndexRouter.use('/user',userRouter);

export default userIndexRouter;