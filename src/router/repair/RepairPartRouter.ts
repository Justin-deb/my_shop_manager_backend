import { Router } from "express";
import * as repairPartController from '../../controller/repair/RepairPartController';
import { validateRecord, validateSchema } from "../../common/utils/ValidationMiddleware";
import { numberParameter } from "../../schema/common/SearchParameters";
import { createRepairPart, updateRepairPart } from "../../schema/repair/RepairPartSchemas";

const repairPartRouter = Router();

repairPartRouter.get('/repairPart/allRepairId',
                        validateRecord(numberParameter),
                        repairPartController.findAllByRepairId);

repairPartRouter.get('/repairPart/id',
                        validateRecord(numberParameter),
                        repairPartController.findById);

repairPartRouter.post('/repairPart/create',
                        validateSchema(createRepairPart),
                        repairPartController.create);

repairPartRouter.put('/repairPart/update',
                        validateSchema(updateRepairPart),
                        repairPartController.update);

repairPartRouter.delete('/repairPart/delete',
                        validateRecord(numberParameter),
                        repairPartController.remove);

export default repairPartRouter;