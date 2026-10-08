import { Router } from "express";
import employeeIndexRouter from "./employee/Index";
import paymentIndexRouter from "./payment/Index";
import pieceIndexRouter from "./piece/Index";
import productIndexRouter from "./product/Index";
import repairIndexRouter from "./repair/Index";
import shopIndexRouter from "./shop/Index";
import userIndexRouter from "./user/Index";

const router = Router();

router.use(employeeIndexRouter);

router.use(paymentIndexRouter);

router.use(pieceIndexRouter);

router.use(productIndexRouter);

router.use(repairIndexRouter);

router.use(shopIndexRouter);

router.use(userIndexRouter);

export default router;