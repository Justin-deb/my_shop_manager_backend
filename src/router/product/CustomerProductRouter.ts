import { Router } from 'express';
import * as customerProductController from '../../controller/product/CustomerProductController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { numberParameter } from '../../schema/common/SearchParameters';
import { createCustomerProduct, updateCustomerProduct } from '../../schema/product/CustomerProductSchemas';

const customerProductRouter = Router();

customerProductRouter.get('/customerProduct/id',
                            validateRecord(numberParameter),
                            customerProductController.findById);

customerProductRouter.get('/customerProduct/customerId',
                            validateRecord(numberParameter),
                            customerProductController.findByCustomerId);

customerProductRouter.get('/customerProduct/productId',
                            validateRecord(numberParameter),
                            customerProductController.findByProductId);

customerProductRouter.post('/customerProduct/create',
                            validateSchema(createCustomerProduct),
                            customerProductController.create);

customerProductRouter.put('/customerProduct/update',
                            validateSchema(updateCustomerProduct),
                            customerProductController.update);

customerProductRouter.delete('/customerProduct/delete',
                            validateRecord(numberParameter),
                            customerProductController.remove);

export default customerProductRouter;