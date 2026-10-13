import { Router } from "express";
import invoiceRouter from "./InvoiceRouter";
import paymentRouter from "./PaymentRouter";
import paymentMethodRouter from "./PaymentMethodRouter";
import paymentStatusRouter from "./PaymentStatusRouter";

const paymentIndexRouter = Router();

paymentIndexRouter.use('/payment',invoiceRouter);

paymentIndexRouter.use('/payment',paymentRouter);

paymentIndexRouter.use('/payment',paymentMethodRouter);

paymentIndexRouter.use('/payment',paymentStatusRouter);

export default paymentIndexRouter;