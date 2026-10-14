import { Router } from 'express';
import * as employeeController from '../../controller/employee/EmployeeController';
import { validateSchema } from '../../common/utils/ValidationMiddleware';
import * as schemas from '../../schema/employee/EmployeeSchemas';

const employeeRouter = Router();

employeeRouter.get('/employee/allShopId/:shopId',
                    validateSchema(schemas.findAllByShopId),
                    employeeController.findAllByShopId);

employeeRouter.get('/employee/name/:shopId',
                    validateSchema(schemas.findByName),
                    employeeController.findByName);

employeeRouter.get('/employee/id/:shopId/:employeeId',
                    validateSchema(schemas.findById),
                    employeeController.findById);

employeeRouter.post('/employee/create',
                    validateSchema(schemas.createEmployee),
                    employeeController.create);

employeeRouter.put('/employee/update/:shopId',
                    validateSchema(schemas.updateEmployee),
                    employeeController.update);

employeeRouter.delete('/employee/delete/:shopId/:employeeId',
                    validateSchema(schemas.findById),
                    employeeController.remove);

export default employeeRouter;