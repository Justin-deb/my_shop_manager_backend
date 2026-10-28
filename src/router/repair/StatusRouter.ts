import { Router } from "express";
import * as statusController from "../../controller/repair/StatusController.js";
import * as schemas from "../../schema/repair/StatusSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeAdmin } from "../../common/utils/Auth.js";
import { cacheMiddleware } from "../../common/utils/CacheMiddleware.js";
import { Times } from "../../common/constants/TimeInSeconds.js";

const NAMESPACE = 'status';

const statusRouter = Router();

statusRouter.get('/status/all',
                    cacheMiddleware(NAMESPACE,Times.day),
                    statusController.findAll);

statusRouter.get('/status/id/:statusId',
                    validateSchema(schemas.findById),
                    statusController.findById);

statusRouter.get('/status/name',
                    validateSchema(schemas.findByName),
                    statusController.findByName);

statusRouter.post('/status/create',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.createStatus),
                    cacheMiddleware(NAMESPACE),
                    statusController.create);

statusRouter.put('/status/update/:statusId',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.updateStatus),
                    cacheMiddleware(NAMESPACE),
                    statusController.update);

statusRouter.delete('/status/delete/:statusId',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.findById),
                    cacheMiddleware(NAMESPACE),
                    statusController.remove);

export default statusRouter;