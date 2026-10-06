import { Router } from "express";
import * as repairPartController from '../../controller/repair/RepairPartController';
import { validateRecord, validateSchema } from "../../common/utils/ValidationMiddleware";
import { idParameter } from "../../schema/common/SearchParameters";
import { createRepairPart, updateRepairPart } from "../../schema/repair/RepairPartSchemas";

const repairPartRouter = Router();

repairPartRouter.get('/repairPart/allRepairId',
                        validateRecord(idParameter),
                        repairPartController.findAllByRepairId);

repairPartRouter.get('/repairPart/id',
                        validateRecord(idParameter),
                        repairPartController.findById);

repairPartRouter.post('/repairPart/create',
                        validateSchema(createRepairPart),
                        repairPartController.create);

repairPartRouter.put('/repairPart/update',
                        validateSchema(updateRepairPart),
                        repairPartController.update);

repairPartRouter.delete('/repairPart/delete',
                        validateRecord(idParameter),
                        repairPartController.remove);

export default repairPartRouter;