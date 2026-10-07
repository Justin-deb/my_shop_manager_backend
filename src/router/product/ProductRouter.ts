import { Router } from 'express';
import * as productController from '../../controller/product/ProductController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { numberParameter, stringParameter } from '../../schema/common/SearchParameters';
import { createProduct, updateProduct } from '../../schema/product/ProductSchemas';

const productRouter = Router();

productRouter.get('/product/all',
                    productController.findAll);

productRouter.get('/product/id',
                    validateRecord(numberParameter),
                    productController.findById);

productRouter.get('/product/name',
                    validateRecord(stringParameter),
                    productController.findByName);

productRouter.get('/product/productionYear',
                    validateRecord(numberParameter),
                    productController.findByProductionYear);

productRouter.get('/product/model',
                    validateRecord(stringParameter),
                    productController.findByModel);

productRouter.get('/product/manufacturer',
                    validateRecord(stringParameter),
                    productController.findByManufacturer);

productRouter.post('/product/create',
                    validateSchema(createProduct),
                    productController.create);

productRouter.put('/product/update',
                    validateSchema(updateProduct),
                    productController.update);

productRouter.delete('/product/delete',
                    validateRecord(numberParameter),
                    productController.remove);

export default productRouter;