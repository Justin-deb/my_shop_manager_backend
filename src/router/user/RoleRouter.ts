import { Router } from 'express';
import * as roleController from "../../controller/user/RoleController.js";
import * as schemas from "../../schema/user/RoleSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeAdmin } from '../../common/utils/Auth.js';

const roleRouter = Router();

roleRouter.get('/role/all',
                roleController.findAll);

roleRouter.get('/role/id/:roleId',
                validateSchema(schemas.findById),
                roleController.findById);

roleRouter.get('/role/name',
                validateSchema(schemas.findByName),
                roleController.findByName);

roleRouter.post('/role/create',
                authenticate,
                authorizeAdmin,
                validateSchema(schemas.createRole),
                roleController.create);

roleRouter.put('/role/update/:roleId',
                authenticate,
                authorizeAdmin,
                validateSchema(schemas.updateRole),
                roleController.update);

roleRouter.delete('/role/delete/:roleId',
                authenticate,
                authorizeAdmin,
                validateSchema(schemas.findById),
                roleController.remove);

export default roleRouter;