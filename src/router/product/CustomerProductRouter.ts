import { Router } from 'express';
import * as customerProductController from "../../controller/product/CustomerProductController.js";
import * as schemas from "../../schema/product/CustomerProductSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeShopOwner } from '../../common/utils/Auth.js';

const customerProductRouter = Router();

customerProductRouter.get('/customerProduct/id/:shopId/:customerId/:productId',
                            authenticate,
                            authorizeShopOwner,
                            validateSchema(schemas.findById),
                            customerProductController.findById);

customerProductRouter.get('/customerProduct/customerId/:shopId/:customerId',
                            authenticate,
                            authorizeShopOwner,
                            validateSchema(schemas.findByCustomerId),
                            customerProductController.findByCustomerId);

customerProductRouter.get('/customerProduct/productId/:shopId/:productId',
                            authenticate,
                            authorizeShopOwner,
                            validateSchema(schemas.findByProductId),
                            customerProductController.findByProductId);

customerProductRouter.post('/customerProduct/create',
                            authenticate,
                            authorizeShopOwner,
                            validateSchema(schemas.createCustomerProduct),
                            customerProductController.create);

customerProductRouter.put('/customerProduct/update/:shopId/:customerId/:productId',
                            authenticate,
                            authorizeShopOwner,
                            validateSchema(schemas.updateCustomerProduct),
                            customerProductController.update);

customerProductRouter.delete('/customerProduct/delete/:shopId/:customerId/:productId',
                            authenticate,
                            authorizeShopOwner,
                            validateSchema(schemas.findById),
                            customerProductController.remove);

export default customerProductRouter;