import { Router } from "express";
import * as assignmentController from '../../controller/repair/AssignmentController';
import { validateRecord, validateSchema } from "../../common/utils/ValidationMiddleware";
import { idParameter } from "../../schema/common/IdParameterSchemas";
import { createAssignment, updateAssignment } from "../../schema/repair/AssignmentSchemas";

const assignmentRouter = Router();

assignmentRouter.get('/assignment/allRepairId',
                        validateRecord(idParameter),
                        assignmentController.findAllByRepairId);

assignmentRouter.get('/assignment/activeShopId',
                        validateRecord(idParameter),
                        assignmentController.findAllActiveByShopId);

assignmentRouter.get('/assignment/allEmployeeId',
                        validateRecord(idParameter),
                        assignmentController.findAllByEmployeeId);

assignmentRouter.get('/assignment/id',
                        validateRecord(idParameter),
                        assignmentController.findById);

assignmentRouter.post('/assignment/create',
                        validateSchema(createAssignment),
                        assignmentController.create);

assignmentRouter.put('/assignment/update',
                        validateSchema(updateAssignment),
                        assignmentController.update);

assignmentRouter.delete('/assignment/delete',
                            validateRecord(idParameter),
                            assignmentController.remove);