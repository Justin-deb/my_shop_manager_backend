import { Router } from 'express';
import * as positionController from "../../controller/employee/PositionController.js";
import * as schemas from "../../schema/employee/PositionSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeAdmin } from '../../common/utils/Auth.js';
import { cacheMiddleware } from '../../common/utils/CacheMiddleware.js';
import { Times } from '../../common/constants/TimeInSeconds.js';

const NAMESPACE = 'position';

const positionRouter = Router();

positionRouter.get('/position/all',
                    cacheMiddleware(NAMESPACE,Times.day),
                    positionController.findAll);

positionRouter.get('/position/id/:positionId',
                    validateSchema(schemas.findById),
                    positionController.findById);

positionRouter.get('/position/name',
                    validateSchema(schemas.findByName),
                    positionController.findByName);

positionRouter.post('/position/create',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.createPosition),
                    cacheMiddleware(NAMESPACE),
                    positionController.create);

positionRouter.put('/position/update/:positionId',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.updatePosition),
                    cacheMiddleware(NAMESPACE),
                    positionController.update);

positionRouter.delete('/position/delete/:positionId',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.findById),
                    cacheMiddleware(NAMESPACE),
                    positionController.remove);

export default positionRouter;