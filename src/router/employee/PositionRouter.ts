import { Router } from 'express';
import * as positionController from '../../controller/employee/PositionController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { idParameter, nameParameter } from '../../schema/common/SearchParameters';
import { createPosition, updatePosition } from '../../schema/employee/PositionSchemas';

const positionRouter = Router();

positionRouter.get('/position/all',
                    positionController.findAll);

positionRouter.get('/position/id',
                    validateRecord(idParameter),
                    positionController.findById);

positionRouter.get('/position/name',
                    validateRecord(nameParameter),
                    positionController.findByName);

positionRouter.post('/position/create',
                    validateSchema(createPosition),
                    positionController.create);

positionRouter.put('/position/update',
                    validateSchema(updatePosition),
                    positionController.update);

positionRouter.delete('/position/delete',
                    validateRecord(idParameter),
                    positionController.remove);

export default positionRouter;