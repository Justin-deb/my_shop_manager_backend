import { Router } from 'express';
import * as userController from "../../controller/user/UserController.js";
import * as schemas from "../../schema/user/UserSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";

const userRouter = Router();

userRouter.get('/user/all',
                userController.findAll);

userRouter.get('/user/id/:userId',
                validateSchema(schemas.findById),
                userController.findById);

userRouter.get('/user/email',
                validateSchema(schemas.findByEmail),
                userController.findByEmail);

userRouter.post('/user/create',
                validateSchema(schemas.createUser),
                userController.create);

userRouter.put('/user/update/:userId',
                validateSchema(schemas.updateUser),
                userController.update);

userRouter.delete('/user/delete/:userId',
                validateSchema(schemas.findById),
                userController.remove);

export default userRouter;