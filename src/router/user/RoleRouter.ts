import { Router } from 'express';
import * as roleController from '../../controller/user/RoleController';
import * as schemas from '../../schema/user/RoleSchemas';
import { validateSchema } from '../../common/utils/ValidationMiddleware';

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
                validateSchema(schemas.createRole),
                roleController.create);

roleRouter.put('/role/update/:roleId',
                validateSchema(schemas.updateRole),
                roleController.update);

roleRouter.delete('/role/delete/:roleId',
                validateSchema(schemas.findById),
                roleController.remove);

export default roleRouter;