import { Router } from 'express';
import * as shopController from "../../controller/shop/ShopController.js";
import * as schemas from "../../schema/shop/ShopSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";

const shopRouter = Router();

shopRouter.get('/shop/all',
                shopController.findAll);

shopRouter.get('/shop/id/:shopId',
                validateSchema(schemas.findById),
                shopController.findById);

shopRouter.get('/shop/ownerId/:ownerId',
                validateSchema(schemas.findByOwnerId),
                shopController.findByOwnerId);

shopRouter.post('/shop/create',
                validateSchema(schemas.createShop),
                shopController.create);

shopRouter.put('/shop/update/:shopId',
                validateSchema(schemas.updateShop),
                shopController.update);

shopRouter.delete('/shop/delete/:shopId',
                validateSchema(schemas.findById),
                shopController.remove);

export default shopRouter;