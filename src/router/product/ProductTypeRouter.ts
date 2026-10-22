import { Router } from 'express';
import * as productTypeController from "../../controller/product/ProductTypeController.js";
import * as schemas from "../../schema/product/ProductTypeSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";

const productTypeRouter = Router();

productTypeRouter.get('/productType/all',
                        productTypeController.findAll);

productTypeRouter.get('/productType/id/:productTypeId',
                        validateSchema(schemas.findById),
                        productTypeController.findById);

productTypeRouter.get('/productType/name',
                        validateSchema(schemas.findByName),
                        productTypeController.findByName);

productTypeRouter.post('/productType/create',
                        validateSchema(schemas.createProductType),
                        productTypeController.create);

productTypeRouter.put('/productType/update/:productTypeId',
                        validateSchema(schemas.updateProductType),
                        productTypeController.update);

productTypeRouter.delete('/productType/delete/:productTypeId',
                        validateSchema(schemas.findById),
                        productTypeController.remove);

export default productTypeRouter