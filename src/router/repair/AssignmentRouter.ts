import { Router } from "express";
import * as assignmentController from '../../controller/repair/AssignmentController';
import * as schemas from '../../schema/repair/AssignmentSchemas';
import { validateSchema } from "../../common/utils/ValidationMiddleware";

const assignmentRouter = Router();

assignmentRouter.get('/assignment/allRepairId/:shopId/:repairId',
                        validateSchema(schemas.findAllByRepairId),
                        assignmentController.findAllByRepairId);

assignmentRouter.get('/assignment/activeShopId/:shopId',
                        validateSchema(schemas.findAllActiveByShopId),
                        assignmentController.findAllActiveByShopId);

assignmentRouter.get('/assignment/allEmployeeId/:shopId/:employeeId',
                        validateSchema(schemas.findAllByEmployeeId),
                        assignmentController.findAllByEmployeeId);

assignmentRouter.get('/assignment/id/:shopId/:assignmentId',
                        validateSchema(schemas.findById),
                        assignmentController.findById);

assignmentRouter.post('/assignment/create',
                        validateSchema(schemas.createAssignment),
                        assignmentController.create);

assignmentRouter.put('/assignment/update/:shopId/:assignmentId',
                        validateSchema(schemas.updateAssignment),
                        assignmentController.update);

assignmentRouter.delete('/assignment/delete/:shopId/:assignmentId',
                            validateSchema(schemas.findById),
                            assignmentController.remove);

export default assignmentRouter;