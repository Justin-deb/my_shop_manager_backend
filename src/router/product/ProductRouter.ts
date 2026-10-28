import { Router } from 'express';
import * as productController from "../../controller/product/ProductController.js";
import * as schemas  from "../../schema/product/ProductSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeAdmin } from '../../common/utils/Auth.js';
import { Times } from '../../common/constants/TimeInSeconds.js';
import { cacheMiddleware } from '../../common/utils/CacheMiddleware.js';

const NAMESPACE = 'product';

const productRouter = Router();

productRouter.get('/product/all',
                    cacheMiddleware(NAMESPACE,Times.hour),
                    productController.findAll);

productRouter.get('/product/id/:productId',
                    validateSchema(schemas.findById),
                    productController.findById);

productRouter.get('/product/name',
                    validateSchema(schemas.findByName),
                    productController.findByName);

productRouter.get('/product/productionYear/:productionYear',
                    validateSchema(schemas.findByProductionYear),
                    productController.findByProductionYear);

productRouter.get('/product/model',
                    validateSchema(schemas.findByModel),
                    productController.findByModel);

productRouter.get('/product/manufacturer',
                    validateSchema(schemas.findByManufacturer),
                    productController.findByManufacturer);

productRouter.post('/product/create',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.createProduct),
                    cacheMiddleware(NAMESPACE),
                    productController.create);

productRouter.put('/product/update/:productId',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.updateProduct),
                    cacheMiddleware(NAMESPACE),
                    productController.update);

productRouter.delete('/product/delete/:productId',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.findById),
                    cacheMiddleware(NAMESPACE),
                    productController.remove);

export default productRouter;