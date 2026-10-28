import { Router } from 'express';
import * as pieceController from "../../controller/piece/PieceController.js";
import * as schemas from "../../schema/piece/PieceSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeAdmin } from '../../common/utils/Auth.js';
import { cacheMiddleware } from '../../common/utils/CacheMiddleware.js';
import { Times } from '../../common/constants/TimeInSeconds.js';

const NAMESPACE = 'piece';

const pieceRouter = Router();

pieceRouter.get('/piece/all',
                    cacheMiddleware(NAMESPACE,Times.day),
                    pieceController.findAll);

pieceRouter.get('/piece/id/:pieceId',
                    validateSchema(schemas.findById),
                    pieceController.findById);

pieceRouter.get('/piece/name',
                    validateSchema(schemas.findByName),
                    pieceController.findByName);

pieceRouter.post('/piece/create',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.createPiece),
                    cacheMiddleware(NAMESPACE),
                    pieceController.create);

pieceRouter.put('/piece/update/:pieceId',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.updatePiece),
                    cacheMiddleware(NAMESPACE),
                    pieceController.update);

pieceRouter.delete('/piece/delete/:pieceId',
                    authenticate,
                    authorizeAdmin,
                    validateSchema(schemas.findById),
                    cacheMiddleware(NAMESPACE),
                    pieceController.remove);

export default pieceRouter;