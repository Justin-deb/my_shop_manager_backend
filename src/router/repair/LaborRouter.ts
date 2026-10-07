import { Router } from "express";
import * as laborController from '../../controller/repair/LaborController';
import { validateRecord, validateSchema } from "../../common/utils/ValidationMiddleware";
import { numberParameter } from "../../schema/common/SearchParameters";
import { createLabor, updateLabor } from "../../schema/repair/LaborSchemas";

const laborRouter = Router();

laborRouter.get('/labor/id',
                    validateRecord(numberParameter),
                    laborController.findById);

laborRouter.get('/labor/allRepairId',
                    validateRecord(numberParameter),
                    laborController.findAllByRepairId);

laborRouter.post('/labor/create',
                    validateSchema(createLabor),
                    laborController.create);

laborRouter.put('/labor/update',
                    validateSchema(updateLabor),
                    laborController.update);

laborRouter.delete('/labor/delete',
                        validateRecord(numberParameter),
                        laborController.remove);

export default laborRouter;