import { Router } from "express";
import * as userAuthController from '../../../controller/security/user/UserAuthController.js';
import * as schemas from '../../../schema/security/AuthSchemas.js';
import { validateCookie, validateSchema } from "../../../common/utils/ValidationMiddleware.js";

const userAuthRouter = Router();

userAuthRouter.post('/user/register/:userId',
                        validateSchema(schemas.registerAdminSchema),
                        userAuthController.registerUser);

userAuthRouter.post('/user/login/:userId',
                        validateSchema(schemas.loginSchema),
                        userAuthController.loginUser);

userAuthRouter.post('/user/refresh/:userId',
                        validateCookie(schemas.refreshSchema),
                        userAuthController.refreshSessionToken);

export default userAuthRouter;