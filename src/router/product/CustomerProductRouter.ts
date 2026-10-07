import { Router } from 'express';
import * as customerProductController from '../../controller/product/CustomerProductController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { idParameter } from '../../schema/common/SearchParameters';
import { createCustomerProduct, updateCustomerProduct } from '../../schema/product/CustomerProductSchemas';

const customerProductRouter = Router();

customerProductRouter.get('/customerProduct/id',
                            validateRecord(idParameter),
                            customerProductController.findById);

customerProductRouter.get('/customerProduct/customerId',
                            validateRecord(idParameter),
                            customerProductController.findByCustomerId);

customerProductRouter.get('/customerProduct/productId',
                            validateRecord(idParameter),
                            customerProductController.findByProductId);

customerProductRouter.post('/customerProduct/create',
                            validateSchema(createCustomerProduct),
                            customerProductController.create);

customerProductRouter.put('/customerProduct/update',
                            validateSchema(updateCustomerProduct),
                            customerProductController.update);

customerProductRouter.delete('/customerProduct/delete',
                            validateRecord(idParameter),
                            customerProductController.remove);

export default customerProductRouter;