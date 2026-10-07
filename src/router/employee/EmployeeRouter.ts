import { Router } from 'express';
import * as employeeController from '../../controller/employee/EmployeeController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { numberParameter, stringParameter } from '../../schema/common/SearchParameters';
import { createEmployee, updateEmployee } from '../../schema/employee/EmployeeSchemas';

const employeeRouter = Router();

employeeRouter.get('/employee/allShopId',
                    validateRecord(numberParameter),
                    employeeController.findAllByShopId);

employeeRouter.get('/employee/name',
                    validateRecord(stringParameter),
                    employeeController.findByName);

employeeRouter.get('/employee/id',
                    validateRecord(numberParameter),
                    employeeController.findById);

employeeRouter.post('/employee/create',
                    validateSchema(createEmployee),
                    employeeController.create);

employeeRouter.put('/employee/update',
                    validateSchema(updateEmployee),
                    employeeController.update);

employeeRouter.delete('/employee/delete',
                    validateRecord(numberParameter),
                    employeeController.remove);

export default employeeRouter;