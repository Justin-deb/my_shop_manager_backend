import { Router } from "express";
import * as assignmentController from "../../controller/repair/AssignmentController.js";
import * as schemas from "../../schema/repair/AssignmentSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeShopOwner } from "../../common/utils/Auth.js";

const assignmentRouter = Router();

assignmentRouter.get('/assignment/allRepairId/:shopId/:repairId',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.findAllByRepairId),
                        assignmentController.findAllByRepairId);

assignmentRouter.get('/assignment/activeShopId/:shopId',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.findAllActiveByShopId),
                        assignmentController.findAllActiveByShopId);

assignmentRouter.get('/assignment/allEmployeeId/:shopId/:employeeId',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.findAllByEmployeeId),
                        assignmentController.findAllByEmployeeId);

assignmentRouter.get('/assignment/id/:shopId/:assignmentId',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.findById),
                        assignmentController.findById);

assignmentRouter.post('/assignment/create',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.createAssignment),
                        assignmentController.create);

assignmentRouter.put('/assignment/update/:shopId/:assignmentId',
                        authenticate,
                        authorizeShopOwner,
                        validateSchema(schemas.updateAssignment),
                        assignmentController.update);

assignmentRouter.delete('/assignment/delete/:shopId/:assignmentId',
                            authenticate,
                            authorizeShopOwner,
                            validateSchema(schemas.findById),
                            assignmentController.remove);

export default assignmentRouter;