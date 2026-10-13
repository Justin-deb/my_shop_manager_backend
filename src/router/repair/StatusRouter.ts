import { Router } from "express";
import * as statusController from '../../controller/repair/StatusController';
import * as schemas from '../../schema/repair/StatusSchemas';
import { validateSchema } from "../../common/utils/ValidationMiddleware";

const statusRouter = Router();

statusRouter.get('/status/all',
                    statusController.findAll);

statusRouter.get('/status/id/:statusId',
                    validateSchema(schemas.findById),
                    statusController.findById);

statusRouter.get('/status/name',
                    validateSchema(schemas.findByName),
                    statusController.findByName);

statusRouter.post('/status/create',
                    validateSchema(schemas.createStatus),
                    statusController.create);

statusRouter.put('/status/update/:statusId',
                    validateSchema(schemas.updateStatus),
                    statusController.update);

statusRouter.delete('/status/delete/:statusId',
                        validateSchema(schemas.findById),
                        statusController.remove);

export default statusRouter;