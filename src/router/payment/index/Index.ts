import { Router } from "express";
import invoiceRouter from "../InvoiceRouter.js";
import paymentRouter from "../PaymentRouter.js";
import paymentMethodRouter from "../PaymentMethodRouter.js";
import paymentStatusRouter from "../PaymentStatusRouter.js";

const paymentIndexRouter = Router();

paymentIndexRouter.use('/payment',invoiceRouter);

paymentIndexRouter.use('/payment',paymentRouter);

paymentIndexRouter.use('/payment',paymentMethodRouter);

paymentIndexRouter.use('/payment',paymentStatusRouter);

export default paymentIndexRouter;