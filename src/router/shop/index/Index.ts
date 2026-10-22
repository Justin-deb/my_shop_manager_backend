import { Router } from "express";
import shopRouter from "../ShopRouter.js";
import warehouseRouter from "../WarehouseRouter.js";

const shopIndexRouter = Router();

shopIndexRouter.use('/shop',shopRouter);

shopIndexRouter.use('/shop',warehouseRouter);

export default shopIndexRouter;