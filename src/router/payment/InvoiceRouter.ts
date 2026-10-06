import { Router } from 'express';
import * as invoiceController from '../../controller/payment/InvoiceController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { idParameter } from '../../schema/common/SearchParameters';
import { createInvoice, updateInvoice } from '../../schema/payment/InvoiceSchemas';

const invoiceRouter = Router();

invoiceRouter.get('/invoice/allRepairId',
                    validateRecord(idParameter),
                    invoiceController.findAllByRepairId);

invoiceRouter.get('/invoice/id',
                    validateRecord(idParameter),
                    invoiceController.findById);

invoiceRouter.post('/invoice/create',
                    validateSchema(createInvoice),
                    invoiceController.create);

invoiceRouter.put('/invoice/update',
                    validateSchema(updateInvoice),
                    invoiceController.update);

invoiceRouter.delete('/invoice/delete',
                    validateRecord(idParameter),
                    invoiceController.remove);

export default invoiceRouter;