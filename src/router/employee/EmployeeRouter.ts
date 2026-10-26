import { Router } from 'express';
import * as employeeController from "../../controller/employee/EmployeeController.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import * as schemas from "../../schema/employee/EmployeeSchemas.js";
import { authenticate, authorizeShopOwner } from '../../common/utils/Auth.js';

const employeeRouter = Router();

employeeRouter.get('/employee/allShopId/:shopId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findAllByShopId),
                    employeeController.findAllByShopId);

employeeRouter.get('/employee/name/:shopId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findByName),
                    employeeController.findByName);

employeeRouter.get('/employee/id/:shopId/:employeeId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findById),
                    employeeController.findById);

employeeRouter.post('/employee/create',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.createEmployee),
                    employeeController.create);

employeeRouter.put('/employee/update/:shopId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.updateEmployee),
                    employeeController.update);

employeeRouter.delete('/employee/delete/:shopId/:employeeId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findById),
                    employeeController.remove);

export default employeeRouter;