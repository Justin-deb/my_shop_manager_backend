import { Router } from 'express';
import * as repairController from "../../controller/repair/RepairController.js";
import * as schemas from "../../schema/repair/RepairSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";

const repairRouter = Router();

repairRouter.get('/repair/allShopId/:shopId',
                    validateSchema(schemas.findAllByShopId),
                    repairController.findAllByShopId);

repairRouter.get('/repair/id/:shopId/:repairId',
                    validateSchema(schemas.findById),
                    repairController.findById);

repairRouter.get('/repair/allStatusId/:shopId/:statusId',
                    validateSchema(schemas.findAllByStatusId),
                    repairController.findAllByStatusId);

repairRouter.get('/repair/allCustomerId/:shopId/:customerId',
                    validateSchema(schemas.findAllByCustomerId),
                    repairController.findAllByCustomerId);

repairRouter.post('/repair/create',
                    validateSchema(schemas.createRepair),
                    repairController.create);

repairRouter.put('/repair/update/:shopId/:repairId',
                    validateSchema(schemas.updateRepair),
                    repairController.update);

repairRouter.delete('/repair/delete/:shopId/:repairId',
                    validateSchema(schemas.findById),
                    repairController.remove);

export default repairRouter;