import { Router } from 'express';
import * as paymentStatusController from '../../controller/payment/PaymentStatusController';
import * as schemas from '../../schema/payment/PaymentStatusSchemas';
import { validateSchema } from '../../common/utils/ValidationMiddleware';

const paymentStatusRouter = Router();

paymentStatusRouter.get('/paymentStatus/all',
                            paymentStatusController.findAll);

paymentStatusRouter.get('/paymentStatus/id/:paymentStatusId',
                            validateSchema(schemas.findById),
                            paymentStatusController.findById);

paymentStatusRouter.get('/paymentStatus/name',
                            validateSchema(schemas.findByName),
                            paymentStatusController.findByName);

paymentStatusRouter.post('/paymentStatus/create',
                            validateSchema(schemas.createPaymentStatus),
                            paymentStatusController.create);

paymentStatusRouter.put('/paymentStatus/update/:paymentStatusId',
                            validateSchema(schemas.updatePaymentStatus),
                            paymentStatusController.update);

paymentStatusRouter.delete('/paymentStatus/delete/:paymentStatusId',
                            validateSchema(schemas.findById),
                            paymentStatusController.remove);

export default paymentStatusRouter;