import { Router } from "express";
import employeeIndexRouter from "./employee/index/Index.js";
import paymentIndexRouter from "./payment/index/Index.js";
import pieceIndexRouter from "./piece/index/Index.js";
import productIndexRouter from "./product/index/Index.js";
import repairIndexRouter from "./repair/index/Index.js";
import shopIndexRouter from "./shop/index/Index.js";
import userIndexRouter from "./user/index/Index.js";
import authIndexRouter from "./security/index.js";

const router = Router();

router.use(employeeIndexRouter);

router.use(paymentIndexRouter);

router.use(pieceIndexRouter);

router.use(productIndexRouter);

router.use(repairIndexRouter);

router.use(shopIndexRouter);

router.use(userIndexRouter);

router.use(authIndexRouter)

export default router;