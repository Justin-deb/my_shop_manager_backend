import { Router } from 'express';
import * as paymentMethodController from '../../controller/payment/PaymentMethodController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { numberParameter, stringParameter } from '../../schema/common/SearchParameters';
import { createPaymentMethod, updatePaymentMethod } from '../../schema/payment/PaymentMethodSchemas';

const paymentMethodRouter = Router();

paymentMethodRouter.get('/paymentMethod/all',
                            paymentMethodController.findAll);

paymentMethodRouter.get('/paymentMethod/id',
                            validateRecord(numberParameter),
                            paymentMethodController.findById);

paymentMethodRouter.get('/paymentMethod/name',
                            validateRecord(stringParameter),
                            paymentMethodController.findByName);

paymentMethodRouter.post('/paymentMethod/create',
                            validateSchema(createPaymentMethod),
                            paymentMethodController.create);

paymentMethodRouter.put('/paymentMethod/update',
                            validateSchema(updatePaymentMethod),
                            paymentMethodController.update);

paymentMethodRouter.delete('/paymentMethod/delete',
                            validateRecord(numberParameter),
                            paymentMethodController.remove);

export default paymentMethodRouter;