import { Router } from 'express';
import * as positionController from '../../controller/employee/PositionController';
import * as schemas from '../../schema/employee/PositionSchemas';
import { validateSchema } from '../../common/utils/ValidationMiddleware';

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
                    validateSchema(schemas.createPosition),
                    positionController.create);

positionRouter.put('/position/update/:positionId',
                    validateSchema(schemas.updatePosition),
                    positionController.update);

positionRouter.delete('/position/delete/:positionId',
                    validateSchema(schemas.findById),
                    positionController.remove);

export default positionRouter;