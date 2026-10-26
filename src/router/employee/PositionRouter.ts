import { Router } from 'express';
import * as positionController from "../../controller/employee/PositionController.js";
import * as schemas from "../../schema/employee/PositionSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeAdmin } from '../../common/utils/Auth.js';

const positionRouter = Router();

positionRouter.get('/position/all',
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
                    positionController.create);

positionRouter.put('/position/update/:positionId',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.updatePosition),
                    positionController.update);

positionRouter.delete('/position/delete/:positionId',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.findById),
                    positionController.remove);

export default positionRouter;