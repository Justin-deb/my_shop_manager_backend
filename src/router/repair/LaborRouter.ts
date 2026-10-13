import { Router } from "express";
import * as laborController from '../../controller/repair/LaborController';
import * as schemas from '../../schema/repair/LaborSchemas';
import { validateSchema } from "../../common/utils/ValidationMiddleware";

const laborRouter = Router();

laborRouter.get('/labor/id/:shopId/:repairId/:laborId',
                    validateSchema(schemas.findById),
                    laborController.findById);

laborRouter.get('/labor/allRepairId/:shopId/:repairId',
                    validateSchema(schemas.findAllByRepairId),
                    laborController.findAllByRepairId);

laborRouter.post('/labor/create',
                    validateSchema(schemas.createLabor),
                    laborController.create);

laborRouter.put('/labor/update/:shopId/:repairId/:laborId',
                    validateSchema(schemas.updateLabor),
                    laborController.update);

laborRouter.delete('/labor/delete/:shopId/:repairId/:laborId',
                        validateSchema(schemas.findById),
                        laborController.remove);

export default laborRouter;