import { Router } from 'express';
import * as repairController from '../../controller/repair/RepairController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { numberParameter } from '../../schema/common/SearchParameters';
import { createRepair, updateRepair } from '../../schema/repair/RepairSchemas';

const repairRouter = Router();

repairRouter.get('/repair/allShopId',
                    validateRecord(numberParameter),
                    repairController.findAllByShopId);

repairRouter.get('/repair/repairId',
                    validateRecord(numberParameter),
                    repairController.findByRepairId);

repairRouter.get('/repair/allStatusId',
                    validateRecord(numberParameter),
                    repairController.findAllByStatusId);

repairRouter.get('/repair/allCustomerId',
                    validateRecord(numberParameter),
                    repairController.findAllByCustomerId);

repairRouter.post('/repair/create',
                    validateSchema(createRepair),
                    repairController.create);

repairRouter.put('/repair/update',
                    validateSchema(updateRepair),
                    repairController.update);

repairRouter.delete('/repair/delete',
                    validateRecord(numberParameter),
                    repairController.remove);

export default repairRouter;