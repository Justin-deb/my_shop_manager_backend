import { Router } from 'express';
import * as paymentMethodController from '../../controller/payment/PaymentMethodController';
import * as schemas from '../../schema/payment/PaymentMethodSchemas';
import { validateSchema } from '../../common/utils/ValidationMiddleware';

const paymentMethodRouter = Router();

paymentMethodRouter.get('/paymentMethod/all',
                            paymentMethodController.findAll);

paymentMethodRouter.get('/paymentMethod/id/:paymentMethodId',
                            validateSchema(schemas.findById),
                            paymentMethodController.findById);

paymentMethodRouter.get('/paymentMethod/name',
                            validateSchema(schemas.findByName),
                            paymentMethodController.findByName);

paymentMethodRouter.post('/paymentMethod/create',
                            validateSchema(schemas.createPaymentMethod),
                            paymentMethodController.create);

paymentMethodRouter.put('/paymentMethod/update/:paymentMethodId',
                            validateSchema(schemas.updatePaymentMethod),
                            paymentMethodController.update);

paymentMethodRouter.delete('/paymentMethod/delete/:paymentMethodId',
                            validateSchema(schemas.findById),
                            paymentMethodController.remove);

export default paymentMethodRouter;