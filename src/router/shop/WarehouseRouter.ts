import { Router } from 'express';
import * as warehouseController from '../../controller/shop/WarehouseController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { numberParameter } from '../../schema/common/SearchParameters';
import { createWarehouse, updateWarehouse } from '../../schema/shop/WarehouseSchemas';

const warehouseRouter = Router();

warehouseRouter.get('/warehouse/allShopId',
                        validateRecord(numberParameter),
                        warehouseController.findAllByShopId);

warehouseRouter.get('/warehouse/pieceId',
                        validateRecord(numberParameter),
                        warehouseController.findByPieceId);

warehouseRouter.post('/warehouse/create',
                        validateSchema(createWarehouse),
                        warehouseController.create);

warehouseRouter.put('/warehouse/update',
                        validateSchema(updateWarehouse),
                        warehouseController.update);

warehouseRouter.delete('/warehouse/delete',
                        validateRecord(numberParameter),
                        warehouseController.remove);

export default warehouseRouter;