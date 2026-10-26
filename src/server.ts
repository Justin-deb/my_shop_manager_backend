import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import logger from 'jet-logger';
import morgan from 'morgan';
import { errorHandler } from "./common/utils/middlewares.js";

import EnvVars, { NodeEnvs } from "./common/constants/env.js";
import router from "./router/Index.js";

/******************************************************************************
                                Setup
******************************************************************************/

const app = express();

// **** Middleware **** //

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Show routes called in console during development
if (EnvVars.NodeEnv === NodeEnvs.DEV) {
  app.use(morgan('dev'));
}

// Security
if (EnvVars.NodeEnv === NodeEnvs.PRODUCTION) {
  app.use(helmet());
}

// Add APIs, must be after middleware
// app.use(Paths._, BaseRouter);
app.use('/api',router);

// Add error handler
app.use(errorHandler);

/******************************************************************************
                                Export default
******************************************************************************/

export default app;
