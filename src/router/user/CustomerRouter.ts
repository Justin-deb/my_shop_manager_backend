import { Router } from 'express';
import * as customerController from '../../controller/user/CustomerController';
import * as schemas from '../../schema/user/CustomerSchemas';
import { validateSchema } from '../../common/utils/ValidationMiddleware';

const customerRouter = Router();

customerRouter.get('/customer/all',
                    customerController.findAll);

customerRouter.get('/customer/id/:shopId/:customerId',
                    validateSchema(schemas.findById),
                    customerController.findById);

customerRouter.get('/customer/fullName/:shopId',
                    validateSchema(schemas.fullName),
                    customerController.findByFullName);

customerRouter.post('/customer/create',
                    validateSchema(schemas.createCustomer),
                    customerController.create);

customerRouter.put('/customer/update/:shopId/:customerId',
                    validateSchema(schemas.updateCustomer),
                    customerController.update);

customerRouter.delete('/customer/delete/:shopId/:customerId',
                    validateSchema(schemas.findById),
                    customerController.remove);

export default customerRouter;