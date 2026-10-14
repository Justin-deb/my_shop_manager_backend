import { Router } from 'express';
import * as warehouseController from '../../controller/shop/WarehouseController';
import * as schemas from '../../schema/shop/WarehouseSchemas';
import { validateSchema } from '../../common/utils/ValidationMiddleware';

const warehouseRouter = Router();

warehouseRouter.get('/warehouse/allShopId/:shopId',
                        validateSchema(schemas.findAllByShopId),
                        warehouseController.findAllByShopId);

warehouseRouter.get('/warehouse/pieceId/:shopId/:pieceId',
                        validateSchema(schemas.findByPieceId),
                        warehouseController.findByPieceId);

warehouseRouter.post('/warehouse/create',
                        validateSchema(schemas.createWarehouse),
                        warehouseController.create);

warehouseRouter.put('/warehouse/update/:shopId/:pieceId',
                        validateSchema(schemas.updateWarehouse),
                        warehouseController.update);

warehouseRouter.delete('/warehouse/delete/:shopId/:pieceId',
                        validateSchema(schemas.findByPieceId),
                        warehouseController.remove);

export default warehouseRouter;