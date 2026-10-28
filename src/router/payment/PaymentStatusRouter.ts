import { Router } from 'express';
import * as paymentStatusController from "../../controller/payment/PaymentStatusController.js";
import * as schemas from "../../schema/payment/PaymentStatusSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeAdmin } from '../../common/utils/Auth.js';
import { cacheMiddleware } from '../../common/utils/CacheMiddleware.js';
import { Times } from '../../common/constants/TimeInSeconds.js';

const NAMESPACE = 'paymentStatus';

const paymentStatusRouter = Router();

paymentStatusRouter.get('/paymentStatus/all',
                            cacheMiddleware(NAMESPACE,Times.week),
                            paymentStatusController.findAll);

paymentStatusRouter.get('/paymentStatus/id/:paymentStatusId',
                            validateSchema(schemas.findById),
                            paymentStatusController.findById);

paymentStatusRouter.get('/paymentStatus/name',
                            validateSchema(schemas.findByName),
                            paymentStatusController.findByName);

paymentStatusRouter.post('/paymentStatus/create',
                            authenticate,
                            authorizeAdmin,
                            validateSchema(schemas.createPaymentStatus),
                            cacheMiddleware(NAMESPACE),
                            paymentStatusController.create);

paymentStatusRouter.put('/paymentStatus/update/:paymentStatusId',
                            authenticate,
                            authorizeAdmin,
                            validateSchema(schemas.updatePaymentStatus),
                            cacheMiddleware(NAMESPACE),
                            paymentStatusController.update);

paymentStatusRouter.delete('/paymentStatus/delete/:paymentStatusId',
                            authenticate,
                            authorizeAdmin,
                            validateSchema(schemas.findById),
                            cacheMiddleware(NAMESPACE),
                            paymentStatusController.remove);

export default paymentStatusRouter;