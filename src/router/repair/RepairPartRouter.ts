import { Router } from "express";
import * as repairPartController from "../../controller/repair/RepairPartController.js";
import * as schemas from "../../schema/repair/RepairPartSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeShopOwner } from "../../common/utils/Auth.js";

const repairPartRouter = Router();

repairPartRouter.get('/repairPart/allRepairId/:shopId/:repairId',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.findAllByRepairId),
                        repairPartController.findAllByRepairId);

repairPartRouter.get('/repairPart/id/:shopId/:repairId/:pieceId',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.findById),
                        repairPartController.findById);

repairPartRouter.post('/repairPart/create',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.createRepairPart),
                        repairPartController.create);

repairPartRouter.put('/repairPart/update/:shopId/:repairId/:pieceId',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.updateRepairPart),
                        repairPartController.update);

repairPartRouter.delete('/repairPart/delete/:shopId/:repairId/:pieceId',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.findById),
                        repairPartController.remove);

export default repairPartRouter;