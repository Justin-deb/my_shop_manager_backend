import { Router } from 'express';
import * as customerController from "../../controller/user/CustomerController.js";
import * as schemas from "../../schema/user/CustomerSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeAdmin, authorizeShopOwner } from '../../common/utils/Auth.js';

const customerRouter = Router();

customerRouter.get('/customer/all',
                    authenticate,
                    authorizeAdmin,
                    customerController.findAll);

customerRouter.get('/customer/id/:shopId/:customerId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findById),
                    customerController.findById);

customerRouter.get('/customer/fullName/:shopId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.fullName),
                    customerController.findByFullName);

customerRouter.post('/customer/create',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.createCustomer),
                    customerController.create);

customerRouter.put('/customer/update/:shopId/:customerId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.updateCustomer),
                    customerController.update);

customerRouter.delete('/customer/delete/:shopId/:customerId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findById),
                    customerController.remove);

export default customerRouter;