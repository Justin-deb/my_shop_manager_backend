import { Router } from 'express';
import * as shopController from '../../controller/shop/ShopController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { numberParameter } from '../../schema/common/SearchParameters';
import { createShop, updateShop } from '../../schema/shop/ShopSchemas';

const shopRouter = Router();

shopRouter.get('/shop/all',
                shopController.findAll);

shopRouter.get('/shop/id',
                validateRecord(numberParameter),
                shopController.findById);

shopRouter.get('/shop/ownerId',
                validateRecord(numberParameter),
                shopController.findByOwnerId);

shopRouter.post('/shop/create',
                validateSchema(createShop),
                shopController.create);

shopRouter.put('/shop/update',
                validateSchema(updateShop),
                shopController.update);

shopRouter.delete('/shop/delete',
                validateRecord(numberParameter),
                shopController.remove);

export default shopRouter;