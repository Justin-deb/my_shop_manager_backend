import { Router } from "express";
import * as adminAuthController from '../../../controller/security/admin/AdminAuthController.js';
import * as schemas from '../../../schema/security/AuthSchemas.js';
import { validateCookie, validateSchema } from "../../../common/utils/ValidationMiddleware.js";

const adminAuthRouter = Router();

adminAuthRouter.post('/admin/register/:userId',
                        validateSchema(schemas.registerAdminSchema),
                        adminAuthController.registerAdmin);

adminAuthRouter.post('/admin/login/:userId',
                        validateSchema(schemas.loginSchema),
                        adminAuthController.loginAdmin);

adminAuthRouter.post('/admin/refresh/:userId',
                        validateCookie(schemas.refreshSchema),
                        adminAuthController.refreshSessionToken);

export default adminAuthRouter;