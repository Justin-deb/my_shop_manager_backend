import { Router } from 'express';
import * as paymentController from '../../controller/payment/PaymentController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { numberOrStringParameter, numberParameter } from '../../schema/common/SearchParameters';
import { createPayment, updatePayment } from '../../schema/payment/PaymentSchemas';

const paymentRouter = Router();

paymentRouter.get('/payment/allInvoiceId',
                    validateRecord(numberParameter),
                    paymentController.findAllByInvoiceId);

paymentRouter.get('/payment/id',
                    validateRecord(numberParameter),
                    paymentController.findById);

paymentRouter.get('/payment/reference',
                    // validateRecord(numberOrStringParameter),
                    paymentController.findByReference);

paymentRouter.post('/payment/create',
                    validateSchema(createPayment),
                    paymentController.create);

paymentRouter.put('/payment/update',
                    validateSchema(updatePayment),
                    paymentController.update);

paymentRouter.delete('/payment/delete',
                    validateRecord(numberParameter),
                    paymentController.remove);

export default paymentRouter;