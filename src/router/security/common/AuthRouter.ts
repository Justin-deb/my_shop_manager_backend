import { Router } from "express";
import * as authController from '../../../controller/security/common/AuthController.js';
import { validateAuth } from "../../../common/utils/ValidationMiddleware.js";
import { authSchema } from "../../../schema/security/AuthSchemas.js";

const authRouter = Router();

authRouter.delete('/delete',
                    validateAuth(authSchema),
                    authController.logout);

export default authRouter;