import { Router } from 'express';
import * as pieceController from '../../controller/piece/PieceController';
import * as schemas from '../../schema/piece/PieceSchemas';
import { validateSchema } from '../../common/utils/ValidationMiddleware';

const pieceRouter = Router();

pieceRouter.get('/piece/all',
                    pieceController.findAll);

pieceRouter.get('/piece/id/:pieceId',
                    validateSchema(schemas.findById),
                    pieceController.findById);

pieceRouter.get('/piece/name',
                    validateSchema(schemas.findByName),
                    pieceController.findByName);

pieceRouter.post('/piece/create',
                    validateSchema(schemas.createPiece),
                    pieceController.create);

pieceRouter.put('/piece/update/:pieceId',
                    validateSchema(schemas.updatePiece),
                    pieceController.update);

pieceRouter.delete('/piece/delete/:pieceId',
                    validateSchema(schemas.findById),
                    pieceController.remove);

export default pieceRouter;