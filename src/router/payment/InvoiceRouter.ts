import { Router } from 'express';
import * as invoiceController from '../../controller/payment/InvoiceController';
import * as schemas from '../../schema/payment/InvoiceSchemas';
import { validateSchema } from '../../common/utils/ValidationMiddleware';

const invoiceRouter = Router();

invoiceRouter.get('/invoice/allRepairId/:shopId/:repairId',
                    validateSchema(schemas.findAllByRepairId),
                    invoiceController.findAllByRepairId);

invoiceRouter.get('/invoice/id/:shopId/:invoiceId',
                    validateSchema(schemas.findById),
                    invoiceController.findById);

invoiceRouter.post('/invoice/create',
                    validateSchema(schemas.createInvoice),
                    invoiceController.create);

invoiceRouter.put('/invoice/update/:shopId/:invoiceId',
                    validateSchema(schemas.updateInvoice),
                    invoiceController.update);

invoiceRouter.delete('/invoice/delete/:shopId/:invoiceId',
                    validateSchema(schemas.findById),
                    invoiceController.remove);

export default invoiceRouter;