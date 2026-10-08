import { Router } from "express";
import pieceRouter from "./PieceRouter";

const pieceIndexRouter = Router();

pieceIndexRouter.use('/piece',pieceRouter);

export default pieceIndexRouter;