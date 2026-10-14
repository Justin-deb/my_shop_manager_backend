import { Router } from "express";
import shopRouter from "./ShopRouter";
import warehouseRouter from "./WarehouseRouter";

const shopIndexRouter = Router();

shopIndexRouter.use('/shop',shopRouter);

shopIndexRouter.use('/shop',warehouseRouter);

export default shopIndexRouter;