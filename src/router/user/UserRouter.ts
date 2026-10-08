import { Router } from 'express';
import * as userController from '../../controller/user/UserController';
import { validateRecord, validateSchema } from '../../common/utils/ValidationMiddleware';
import { numberParameter, stringParameter } from '../../schema/common/SearchParameters';
import { createUser, updateUser } from '../../schema/user/UserSchemas';

const userRouter = Router();

userRouter.get('/user/all',
                userController.findAll);

userRouter.get('/user/id',
                validateRecord(numberParameter),
                userController.findById);

userRouter.get('/user/email',
                validateRecord(stringParameter),
                userController.findByEmail);

userRouter.post('/user/create',
                validateSchema(createUser),
                userController.create);

userRouter.put('/user/update',
                validateSchema(updateUser),
                userController.update);

userRouter.delete('/user/delete',
                validateRecord(numberParameter),
                userController.remove);

export default userRouter;