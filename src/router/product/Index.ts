import { Router } from "express";
import customerProductRouter from "./CustomerProductRouter";
import productRouter from "./ProductRouter";
import productTypeRouter from "./ProductTypeRouter";

const productIndexRouter = Router();

productIndexRouter.use('/product',customerProductRouter);

productIndexRouter.use('/product',productRouter);

productIndexRouter.use('/product',productTypeRouter);

export default productIndexRouter;