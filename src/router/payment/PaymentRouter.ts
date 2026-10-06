import { Router } from 'express';
import * as paymentController from '../../controller/payment/PaymentController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { idNameParameter, idParameter } from '../../schema/common/SearchParameters';
import { createPayment, updatePayment } from '../../schema/payment/PaymentSchemas';

const paymentRouter = Router();

paymentRouter.get('/payment/allInvoiceId',
                    validateRecord(idParameter),
                    paymentController.findAllByInvoiceId);

paymentRouter.get('/payment/id',
                    validateRecord(idParameter),
                    paymentController.findById);

paymentRouter.get('/payment/reference',
                    validateRecord(idNameParameter),
                    paymentController.findByReference);

paymentRouter.post('/payment/create',
                    validateSchema(createPayment),
                    paymentController.create);

paymentRouter.put('/payment/update',
                    validateSchema(updatePayment),
                    paymentController.update);

paymentRouter.delete('/payment/delete',
                    validateRecord(idParameter),
                    paymentController.remove);

export default paymentRouter;