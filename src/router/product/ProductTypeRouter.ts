import { Router } from 'express';
import * as productTypeController from "../../controller/product/ProductTypeController.js";
import * as schemas from "../../schema/product/ProductTypeSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeAdmin } from '../../common/utils/Auth.js';
import { cacheMiddleware } from '../../common/utils/CacheMiddleware.js';
import { Times } from '../../common/constants/TimeInSeconds.js';

const NAMESPACE = 'productType';

const productTypeRouter = Router();

productTypeRouter.get('/productType/all',
                        cacheMiddleware(NAMESPACE,Times.week),
                        productTypeController.findAll);

productTypeRouter.get('/productType/id/:productTypeId',
                        validateSchema(schemas.findById),
                        productTypeController.findById);

productTypeRouter.get('/productType/name',
                        validateSchema(schemas.findByName),
                        productTypeController.findByName);

productTypeRouter.post('/productType/create',
                        authenticate,
                        authorizeAdmin,
                        validateSchema(schemas.createProductType),
                        cacheMiddleware(NAMESPACE),
                        productTypeController.create);

productTypeRouter.put('/productType/update/:productTypeId',
                        authenticate,
                        authorizeAdmin,
                        validateSchema(schemas.updateProductType),
                        cacheMiddleware(NAMESPACE),
                        productTypeController.update);

productTypeRouter.delete('/productType/delete/:productTypeId',
                        authenticate,
                        authorizeAdmin,
                        validateSchema(schemas.findById),
                        cacheMiddleware(NAMESPACE),
                        productTypeController.remove);

export default productTypeRouter