import { Router } from "express";
import * as userRolesController from "../../controller/user/UserRolesController.js";
import * as schemas from "../../schema/user/UserRolesSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeAdmin } from "../../common/utils/Auth.js";

const userRolesRouter = Router();

userRolesRouter.get('/userRoles/findAll',
                        authenticate,
                        authorizeAdmin,
                        userRolesController.findAll);

userRolesRouter.get('/userRoles/findByUserId/:userId',
                        authenticate,
                        authorizeAdmin,
                        validateSchema(schemas.findByUserId),
                        userRolesController.findAllRolesByUserId);

userRolesRouter.get('/userRoles/findByRoleId/:roleId',
                        authenticate,
                        authorizeAdmin,
                        validateSchema(schemas.findByRoleId),
                        userRolesController.findAllUsersByRoleId);

userRolesRouter.get('/userRoles/hasRole/:userId/:roleId',
                        authenticate,
                        authorizeAdmin,
                        validateSchema(schemas.userIdRoleId),
                        userRolesController.userHasRole);

userRolesRouter.post('/userRoles/create/:userId/:roleId',
                        authenticate,
                        authorizeAdmin,
                        validateSchema(schemas.userIdRoleId),
                        userRolesController.create);

userRolesRouter.delete('/userRoles/delete/:userId/:roleId',
                        authenticate,
                        authorizeAdmin,
                        validateSchema(schemas.userIdRoleId),
                        userRolesController.remove);

export default userRolesRouter;