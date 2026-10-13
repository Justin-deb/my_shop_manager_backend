import { Router } from "express";
import * as repairPartController from '../../controller/repair/RepairPartController';
import * as schemas from '../../schema/repair/RepairPartSchemas';
import { validateSchema } from "../../common/utils/ValidationMiddleware";

const repairPartRouter = Router();

repairPartRouter.get('/repairPart/allRepairId/:shopId/:repairId',
                        validateSchema(schemas.findAllByRepairId),
                        repairPartController.findAllByRepairId);

repairPartRouter.get('/repairPart/id/:shopId/:repairId/:pieceId',
                        validateSchema(schemas.findById),
                        repairPartController.findById);

repairPartRouter.post('/repairPart/create',
                        validateSchema(schemas.createRepairPart),
                        repairPartController.create);

repairPartRouter.put('/repairPart/update/:shopId/:repairId/:pieceId',
                        validateSchema(schemas.updateRepairPart),
                        repairPartController.update);

repairPartRouter.delete('/repairPart/delete/:shopId/:repairId/:pieceId',
                        validateSchema(schemas.findById),
                        repairPartController.remove);

export default repairPartRouter;