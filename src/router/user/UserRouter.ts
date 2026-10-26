import { Router } from 'express';
import * as userController from "../../controller/user/UserController.js";
import * as schemas from "../../schema/user/UserSchemas.js";
import { validateSchema } from "../../common/utils/ValidationMiddleware.js";
import { authenticate, authorizeAdmin, authorizeShopOwner } from '../../common/utils/Auth.js';

const userRouter = Router();

userRouter.get('/user/all',
                authenticate,
                authorizeAdmin,
                userController.findAll);

userRouter.get('/user/id/:userId',
                authenticate,
                authorizeShopOwner,
                validateSchema(schemas.findById),
                userController.findById);

userRouter.get('/user/email',
                authenticate,
                authorizeShopOwner,
                validateSchema(schemas.findByEmail),
                userController.findByEmail);

userRouter.put('/user/update/:userId',
                authenticate,
                validateSchema(schemas.updateUser),
                userController.update);

userRouter.delete('/user/delete/:userId',
                authenticate,
                authorizeAdmin,
                validateSchema(schemas.findById),
                userController.remove);

export default userRouter;