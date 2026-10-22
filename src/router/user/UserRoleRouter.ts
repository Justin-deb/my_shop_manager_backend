import { Router } from "express";
import * as userRolesController from "../../controller/user/UserRolesController.js";
import * as schemas from "../../schema/user/UserRolesSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";

const userRolesRouter = Router();

userRolesRouter.get('/userRoles/findAll',
                        userRolesController.findAll);

userRolesRouter.get('/userRoles/findByUserId/:userId',
                        validateSchema(schemas.findByUserId),
                        userRolesController.findAllRolesByUserId);

userRolesRouter.get('/userRoles/findByRoleId/:roleId',
                        validateSchema(schemas.findByRoleId),
                        userRolesController.findAllUsersByRoleId);

userRolesRouter.get('/userRoles/hasRole/:userId/:roleId',
                        validateSchema(schemas.userIdRoleId),
                        userRolesController.userHasRole);

userRolesRouter.post('/userRoles/create/:userId/:roleId',
                        validateSchema(schemas.userIdRoleId),
                        userRolesController.create);

userRolesRouter.delete('/userRoles/delete/:userId/:roleId',
                        validateSchema(schemas.userIdRoleId),
                        userRolesController.remove);

export default userRolesRouter;