import { Router } from 'express';
import * as customerController from '../../controller/user/CustomerController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { numberParameter } from '../../schema/common/SearchParameters';
import { createCustomer, fullName, updateCustomer } from '../../schema/user/CustomerSchemas';

const customerRouter = Router();

customerRouter.get('/customer/all',
                    customerController.findAll);

customerRouter.get('/customer/id',
                    validateRecord(numberParameter),
                    customerController.findById);

customerRouter.get('/customer/fullName',
                    validateSchema(fullName),
                    customerController.findByFullName);

customerRouter.post('/customer/create',
                    validateSchema(createCustomer),
                    customerController.create);

customerRouter.put('/customer/update',
                    validateSchema(updateCustomer),
                    customerController.update);

customerRouter.delete('/customer/delete',
                    validateRecord(numberParameter),
                    customerController.remove);

export default customerRouter;