import { Router } from "express";
import * as statusController from '../../controller/repair/StatusController';
import { validateRecord, validateSchema } from "../../common/utils/ValidationMiddleware";
import { createStatus, updateStatus } from "../../schema/repair/StatusSchemas";
import { idParameter, nameParameter } from "../../schema/common/SearchParameters";

const statusRouter = Router();

statusRouter.get('/status/all',
                    statusController.findAll);

statusRouter.get('/status/id',
                    validateRecord(idParameter),
                    statusController.findById);

statusRouter.get('/status/name',
                    validateRecord(nameParameter),
                    statusController.findByName);

statusRouter.post('/status/create',
                    validateSchema(createStatus),
                    statusController.create);

statusRouter.put('/status/update',
                    validateSchema(updateStatus),
                    statusController.update);

statusRouter.delete('/status/delete',
                        validateRecord(idParameter),
                        statusController.remove);

export default statusRouter;