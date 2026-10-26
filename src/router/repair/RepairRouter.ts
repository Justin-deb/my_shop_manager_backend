import { Router } from 'express';
import * as repairController from "../../controller/repair/RepairController.js";
import * as schemas from "../../schema/repair/RepairSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeShopOwner } from '../../common/utils/Auth.js';

const repairRouter = Router();

repairRouter.get('/repair/allShopId/:shopId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findAllByShopId),
                    repairController.findAllByShopId);

repairRouter.get('/repair/id/:shopId/:repairId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findById),
                    repairController.findById);

repairRouter.get('/repair/allStatusId/:shopId/:statusId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findAllByStatusId),
                    repairController.findAllByStatusId);

repairRouter.get('/repair/allCustomerId/:shopId/:customerId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findAllByCustomerId),
                    repairController.findAllByCustomerId);

repairRouter.post('/repair/create',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.createRepair),
                    repairController.create);

repairRouter.put('/repair/update/:shopId/:repairId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.updateRepair),
                    repairController.update);

repairRouter.delete('/repair/delete/:shopId/:repairId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findById),
                    repairController.remove);

export default repairRouter;