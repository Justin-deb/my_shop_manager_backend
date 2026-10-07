import { Router } from "express";
import * as statusController from '../../controller/repair/StatusController';
import { validateRecord, validateSchema } from "../../common/utils/ValidationMiddleware";
import { createStatus, updateStatus } from "../../schema/repair/StatusSchemas";
import { numberParameter, stringParameter } from "../../schema/common/SearchParameters";

const statusRouter = Router();

statusRouter.get('/status/all',
                    statusController.findAll);

statusRouter.get('/status/id',
                    validateRecord(numberParameter),
                    statusController.findById);

statusRouter.get('/status/name',
                    validateRecord(stringParameter),
                    statusController.findByName);

statusRouter.post('/status/create',
                    validateSchema(createStatus),
                    statusController.create);

statusRouter.put('/status/update',
                    validateSchema(updateStatus),
                    statusController.update);

statusRouter.delete('/status/delete',
                        validateRecord(numberParameter),
                        statusController.remove);

export default statusRouter;