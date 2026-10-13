import { Router } from "express";
import employeeIndexRouter from "./employee/index/Index";
import paymentIndexRouter from "./payment/index/Index";
import pieceIndexRouter from "./piece/index/Index";
import productIndexRouter from "./product/index/Index";
import repairIndexRouter from "./repair/index/Index";
import shopIndexRouter from "./shop/index/Index";
import userIndexRouter from "./user/index/Index";

const router = Router();

router.use(employeeIndexRouter);

router.use(paymentIndexRouter);

router.use(pieceIndexRouter);

router.use(productIndexRouter);

router.use(repairIndexRouter);

router.use(shopIndexRouter);

router.use(userIndexRouter);

export default router;