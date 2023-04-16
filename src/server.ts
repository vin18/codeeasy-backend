import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from 'config';
import routes from './routes/routes';
import errorHandlerMiddleware from './middlewares/errorHandler';

function createServer() {
  const app = express();

  const nodeEnv = config.get<string>('nodeEnv');
  if (nodeEnv == 'development') {
    app.use(morgan('dev'));
  }

  app.use(cors());
  app.use(express.json());
  app.use(errorHandlerMiddleware);

  routes(app);

  return app;
}

export default createServer;
