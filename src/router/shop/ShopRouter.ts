import { Router } from 'express';
import * as shopController from "../../controller/shop/ShopController.js";
import * as schemas from "../../schema/shop/ShopSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeAdmin, authorizeShopOwner } from '../../common/utils/Auth.js';

const shopRouter = Router();

shopRouter.get('/shop/all',
                authenticate,
                authorizeAdmin,
                shopController.findAll);

shopRouter.get('/shop/id/:shopId',
                authenticate,
                authorizeShopOwner,
                validateSchema(schemas.findById),
                shopController.findById);

shopRouter.get('/shop/ownerId/:ownerId',
                authenticate,
                authorizeShopOwner,
                validateSchema(schemas.findByOwnerId),
                shopController.findByOwnerId);

shopRouter.post('/shop/create',
                authenticate,
                authorizeShopOwner,
                validateSchema(schemas.createShop),
                shopController.create);

shopRouter.put('/shop/update/:shopId',
                authenticate,
                authorizeShopOwner,
                validateSchema(schemas.updateShop),
                shopController.update);

shopRouter.delete('/shop/delete/:shopId',
                authenticate,
                authorizeShopOwner,
                validateSchema(schemas.findById),
                shopController.remove);

export default shopRouter;