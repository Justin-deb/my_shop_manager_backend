import { Router } from 'express';
import * as productTypeController from '../../controller/product/ProductTypeController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { numberParameter, stringParameter } from '../../schema/common/SearchParameters';
import { createProductType, updateProductType } from '../../schema/product/ProductTypeSchemas';

const productTypeRouter = Router();

productTypeRouter.get('/productType/all',
                        productTypeController.findAll);

productTypeRouter.get('/productType/id',
                        validateRecord(numberParameter),
                        productTypeController.findById);

productTypeRouter.get('/productType/name',
                        validateRecord(stringParameter),
                        productTypeController.findByName);

productTypeRouter.post('/productType/create',
                        validateSchema(createProductType),
                        productTypeController.create);

productTypeRouter.put('/productType/update',
                        validateSchema(updateProductType),
                        productTypeController.update);

productTypeRouter.delete('/productType/delete',
                        validateRecord(numberParameter),
                        productTypeController.remove);

export default productTypeRouter