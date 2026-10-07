import { Router } from 'express';
import * as pieceController from '../../controller/piece/PieceController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { idParameter, nameParameter } from '../../schema/common/SearchParameters';
import { createPiece, updatePiece } from '../../schema/piece/PieceSchemas';

const pieceRouter = Router();

pieceRouter.get('/piece/all',
                    pieceController.findAll);

pieceRouter.get('/piece/id',
                    validateRecord(idParameter),
                    pieceController.findById);

pieceRouter.get('/piece/name',
                    validateRecord(nameParameter),
                    pieceController.findByName);

pieceRouter.post('/piece/create',
                    validateSchema(createPiece),
                    pieceController.create);

pieceRouter.put('/piece/update',
                    validateSchema(updatePiece),
                    pieceController.update);

pieceRouter.delete('/piece/delete',
                    validateRecord(idParameter),
                    pieceController.remove);

export default pieceRouter;