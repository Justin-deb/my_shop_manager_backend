import { Router } from "express";
import pieceRouter from "../PieceRouter.js";

const pieceIndexRouter = Router();

pieceIndexRouter.use('/piece',pieceRouter);

export default pieceIndexRouter;