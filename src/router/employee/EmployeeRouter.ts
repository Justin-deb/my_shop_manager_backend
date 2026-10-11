import { Router } from 'express';
import * as employeeController from '../../controller/employee/EmployeeController';
import { validateSchema } from '../../common/utils/ValidationMiddleware';
import { createEmployee, findAllByShopId, findById, findByName, updateEmployee } from '../../schema/employee/EmployeeSchemas';

const employeeRouter = Router();

employeeRouter.get('/employee/allShopId/:shopId',
                    validateSchema(findAllByShopId),
                    employeeController.findAllByShopId);

employeeRouter.get('/employee/name/:shopId',
                    validateSchema(findByName),
                    employeeController.findByName);

employeeRouter.get('/employee/id/:shopId/:employeeId',
                    validateSchema(findById),
                    employeeController.findById);

employeeRouter.post('/employee/create',
                    validateSchema(createEmployee),
                    employeeController.create);

employeeRouter.put('/employee/update',
                    validateSchema(updateEmployee),
                    employeeController.update);

employeeRouter.delete('/employee/delete/:shopId/:employeeId',
                    validateSchema(findById),
                    employeeController.remove);

export default employeeRouter;