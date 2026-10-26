import { Router } from 'express';
import * as warehouseController from "../../controller/shop/WarehouseController.js";
import * as schemas from "../../schema/shop/WarehouseSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeShopOwner } from '../../common/utils/Auth.js';

const warehouseRouter = Router();

warehouseRouter.get('/warehouse/allShopId/:shopId',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.findAllByShopId),
                        warehouseController.findAllByShopId);

warehouseRouter.get('/warehouse/pieceId/:shopId/:pieceId',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.findByPieceId),
                        warehouseController.findByPieceId);

warehouseRouter.post('/warehouse/create',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.createWarehouse),
                        warehouseController.create);

warehouseRouter.put('/warehouse/update/:shopId/:pieceId',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.updateWarehouse),
                        warehouseController.update);

warehouseRouter.delete('/warehouse/delete/:shopId/:pieceId',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.findByPieceId),
                        warehouseController.remove);

export default warehouseRouter;