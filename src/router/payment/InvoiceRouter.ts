import { Router } from 'express';
import * as invoiceController from "../../controller/payment/InvoiceController.js";
import * as schemas from "../../schema/payment/InvoiceSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeShopOwner } from '../../common/utils/Auth.js';

const invoiceRouter = Router();

invoiceRouter.get('/invoice/allRepairId/:shopId/:repairId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findAllByRepairId),
                    invoiceController.findAllByRepairId);

invoiceRouter.get('/invoice/id/:shopId/:invoiceId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findById),
                    invoiceController.findById);

invoiceRouter.post('/invoice/create',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.createInvoice),
                    invoiceController.create);

invoiceRouter.put('/invoice/update/:shopId/:invoiceId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.updateInvoice),
                    invoiceController.update);

invoiceRouter.delete('/invoice/delete/:shopId/:invoiceId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findById),
                    invoiceController.remove);

export default invoiceRouter;