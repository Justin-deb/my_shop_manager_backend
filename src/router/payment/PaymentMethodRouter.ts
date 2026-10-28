import { Router } from 'express';
import * as paymentMethodController from "../../controller/payment/PaymentMethodController.js";
import * as schemas from "../../schema/payment/PaymentMethodSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeAdmin } from '../../common/utils/Auth.js';
import { cacheMiddleware } from '../../common/utils/CacheMiddleware.js';
import { Times } from '../../common/constants/TimeInSeconds.js';

const NAMESPACE = 'paymentMethod';

const paymentMethodRouter = Router();

paymentMethodRouter.get('/paymentMethod/all',
                            cacheMiddleware(NAMESPACE,Times.week),
                            paymentMethodController.findAll);

paymentMethodRouter.get('/paymentMethod/id/:paymentMethodId',
                            validateSchema(schemas.findById),
                            paymentMethodController.findById);

paymentMethodRouter.get('/paymentMethod/name',
                            validateSchema(schemas.findByName),
                            paymentMethodController.findByName);

paymentMethodRouter.post('/paymentMethod/create',
                            authenticate,
                            authorizeAdmin,
                            validateSchema(schemas.createPaymentMethod),
                            cacheMiddleware(NAMESPACE),
                            paymentMethodController.create);

paymentMethodRouter.put('/paymentMethod/update/:paymentMethodId',
                            authenticate,
                            authorizeAdmin,
                            validateSchema(schemas.updatePaymentMethod),
                            cacheMiddleware(NAMESPACE),
                            paymentMethodController.update);

paymentMethodRouter.delete('/paymentMethod/delete/:paymentMethodId',
                            authenticate,
                            authorizeAdmin,
                            validateSchema(schemas.findById),
                            cacheMiddleware(NAMESPACE),
                            paymentMethodController.remove);

export default paymentMethodRouter;