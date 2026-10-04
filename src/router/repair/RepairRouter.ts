import { Router } from 'express';
import * as repairController from '../../controller/repair/RepairController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { idParameter } from '../../schema/common/IdParameterSchemas';
import { createRepair, updateRepair } from '../../schema/repair/RepairSchemas';

const repairRouter = Router();

repairRouter.get('/repair/allShopId',
                    validateRecord(idParameter),
                    repairController.findAllByShopId);

repairRouter.get('/repair/repairId',
                    validateRecord(idParameter),
                    repairController.findByRepairId);

repairRouter.get('/repair/allStatusId',
                    validateRecord(idParameter),
                    repairController.findAllByStatusId);

repairRouter.get('/repair/allCustomerId',
                    validateRecord(idParameter),
                    repairController.findAllByCustomerId);

repairRouter.post('/repair/create',
                    validateSchema(createRepair),
                    repairController.create);

repairRouter.put('/repair/update',
                    validateSchema(updateRepair),
                    repairController.update);

repairRouter.delete('/repair/delete',
                    validateRecord(idParameter),
                    repairController.remove);

export default repairRouter;