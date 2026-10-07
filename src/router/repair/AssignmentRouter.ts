import { Router } from "express";
import * as assignmentController from '../../controller/repair/AssignmentController';
import { validateRecord, validateSchema } from "../../common/utils/ValidationMiddleware";
import { numberParameter } from "../../schema/common/SearchParameters";
import { createAssignment, updateAssignment } from "../../schema/repair/AssignmentSchemas";

const assignmentRouter = Router();

assignmentRouter.get('/assignment/allRepairId',
                        validateRecord(numberParameter),
                        assignmentController.findAllByRepairId);

assignmentRouter.get('/assignment/activeShopId',
                        validateRecord(numberParameter),
                        assignmentController.findAllActiveByShopId);

assignmentRouter.get('/assignment/allEmployeeId',
                        validateRecord(numberParameter),
                        assignmentController.findAllByEmployeeId);

assignmentRouter.get('/assignment/id',
                        validateRecord(numberParameter),
                        assignmentController.findById);

assignmentRouter.post('/assignment/create',
                        validateSchema(createAssignment),
                        assignmentController.create);

assignmentRouter.put('/assignment/update',
                        validateSchema(updateAssignment),
                        assignmentController.update);

assignmentRouter.delete('/assignment/delete',
                            validateRecord(numberParameter),
                            assignmentController.remove);

export default assignmentRouter;