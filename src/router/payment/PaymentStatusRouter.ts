import { Router } from 'express';
import * as paymentStatusController from '../../controller/payment/PaymentStatusController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { idParameter, nameParameter } from '../../schema/common/SearchParameters';
import { createPaymentStatus, updatePaymentStatus } from '../../schema/payment/PaymentStatusSchemas';

const paymentStatusRouter = Router();

paymentStatusRouter.get('/paymentStatus/all',
                            paymentStatusController.findAll);

paymentStatusRouter.get('/paymentStatus/id',
                            validateRecord(idParameter),
                            paymentStatusController.findById);

paymentStatusRouter.get('/paymentStatus/name',
                            validateRecord(nameParameter),
                            paymentStatusController.findByName);

paymentStatusRouter.post('/paymentStatus/create',
                            validateSchema(createPaymentStatus),
                            paymentStatusController.create);

paymentStatusRouter.put('/paymentStatus/update',
                            validateSchema(updatePaymentStatus),
                            paymentStatusController.update);

paymentStatusRouter.delete('/paymentStatus/delete',
                            validateRecord(idParameter),
                            paymentStatusController.remove);

export default paymentStatusRouter;