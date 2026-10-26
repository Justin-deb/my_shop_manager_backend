import { Router } from 'express';
import * as paymentController from "../../controller/payment/PaymentController.js";
import * as schemas from "../../schema/payment/PaymentSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeShopOwner } from '../../common/utils/Auth.js';

const paymentRouter = Router();

paymentRouter.get('/payment/allInvoiceId/:shopId/:invoiceId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findAllByInvoiceId),
                    paymentController.findAllByInvoiceId);

paymentRouter.get('/payment/id/:shopId/:invoiceId/:paymentId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findById),
                    paymentController.findById);

paymentRouter.get('/payment/reference/:shopId/:invoiceId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findByReference),
                    paymentController.findByReference);

paymentRouter.post('/payment/create',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.createPayment),
                    paymentController.create);

paymentRouter.put('/payment/update/:shopId/:invoiceId/:paymentId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.updatePayment),
                    paymentController.update);

paymentRouter.delete('/payment/delete/:shopId/:invoiceId/:paymentId',
                    authenticate,
                    authorizeShopOwner,
                    validateSchema(schemas.findById),
                    paymentController.remove);

export default paymentRouter;