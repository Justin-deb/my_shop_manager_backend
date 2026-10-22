import { Router } from 'express';
import * as customerProductController from "../../controller/product/CustomerProductController.js";
import * as schemas from "../../schema/product/CustomerProductSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";

const customerProductRouter = Router();

customerProductRouter.get('/customerProduct/id/:shopId/:customerId/:productId',
                            validateSchema(schemas.findById),
                            customerProductController.findById);

customerProductRouter.get('/customerProduct/customerId/:shopId/:customerId',
                            validateSchema(schemas.findByCustomerId),
                            customerProductController.findByCustomerId);

customerProductRouter.get('/customerProduct/productId/:shopId/:productId',
                            validateSchema(schemas.findByProductId),
                            customerProductController.findByProductId);

customerProductRouter.post('/customerProduct/create',
                            validateSchema(schemas.createCustomerProduct),
                            customerProductController.create);

customerProductRouter.put('/customerProduct/update/:shopId/:customerId/:productId',
                            validateSchema(schemas.updateCustomerProduct),
                            customerProductController.update);

customerProductRouter.delete('/customerProduct/delete/:shopId/:customerId/:productId',
                            validateSchema(schemas.findById),
                            customerProductController.remove);

export default customerProductRouter;