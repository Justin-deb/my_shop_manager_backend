import { Router } from 'express';
import * as roleController from '../../controller/user/RoleController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { numberParameter, stringParameter } from '../../schema/common/SearchParameters';
import { createRole, updateRole } from '../../schema/user/RoleSchemas';

const roleRouter = Router();

roleRouter.get('/role/all',
                roleController.findAll);

roleRouter.get('/role/id',
                validateRecord(numberParameter),
                roleController.findById);

roleRouter.get('/role/name',
                validateRecord(stringParameter),
                roleController.findByName);

roleRouter.post('/role/create',
                validateSchema(createRole),
                roleController.create);

roleRouter.put('/role/update',
                validateSchema(updateRole),
                roleController.update);

roleRouter.delete('/role/delete',
                validateRecord(numberParameter),
                roleController.remove);

export default roleRouter;