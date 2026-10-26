import { Router } from 'express';
import * as productController from "../../controller/product/ProductController.js";
import * as schemas  from "../../schema/product/ProductSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeAdmin } from '../../common/utils/Auth.js';

const productRouter = Router();

productRouter.get('/product/all',
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
                    productController.create);

productRouter.put('/product/update/:productId',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.updateProduct),
                    productController.update);

productRouter.delete('/product/delete/:productId',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.findById),
                    productController.remove);

export default productRouter;