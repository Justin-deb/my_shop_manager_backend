import { Router } from "express";
import customerProductRouter from "../CustomerProductRouter.js";
import productRouter from "../ProductRouter.js";
import productTypeRouter from "../ProductTypeRouter.js";

const productIndexRouter = Router();

productIndexRouter.use('/product',customerProductRouter);

productIndexRouter.use('/product',productRouter);

productIndexRouter.use('/product',productTypeRouter);

export default productIndexRouter;