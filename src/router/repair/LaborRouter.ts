import { Router } from "express";
import * as laborController from "../../controller/repair/LaborController.js";
import * as schemas from "../../schema/repair/LaborSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeShopOwner } from "../../common/utils/Auth.js";

const laborRouter = Router();

laborRouter.get('/labor/id/:shopId/:repairId/:laborId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findById),
                    laborController.findById);

laborRouter.get('/labor/allRepairId/:shopId/:repairId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findAllByRepairId),
                    laborController.findAllByRepairId);

laborRouter.post('/labor/create',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.createLabor),
                    laborController.create);

laborRouter.put('/labor/update/:shopId/:repairId/:laborId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.updateLabor),
                    laborController.update);

laborRouter.delete('/labor/delete/:shopId/:repairId/:laborId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findById),
                    laborController.remove);

export default laborRouter;