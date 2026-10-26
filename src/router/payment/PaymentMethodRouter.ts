import { Router } from 'express';
import * as paymentMethodController from "../../controller/payment/PaymentMethodController.js";
import * as schemas from "../../schema/payment/PaymentMethodSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeAdmin } from '../../common/utils/Auth.js';

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
                            authenticate,
                            authorizeAdmin,
                            validateSchema(schemas.createPaymentMethod),
                            paymentMethodController.create);

paymentMethodRouter.put('/paymentMethod/update/:paymentMethodId',
                            authenticate,
                            authorizeAdmin,
                            validateSchema(schemas.updatePaymentMethod),
                            paymentMethodController.update);

paymentMethodRouter.delete('/paymentMethod/delete/:paymentMethodId',
                            authenticate,
                            authorizeAdmin,
                            validateSchema(schemas.findById),
                            paymentMethodController.remove);

export default paymentMethodRouter;