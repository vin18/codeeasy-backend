import express from 'express';
import morgan from 'morgan';
import config from 'config';
import routes from './routes/routes';

function createServer() {
  const app = express();

  const nodeEnv = config.get<string>('nodeEnv');
  if (nodeEnv == 'development') {
    app.use(morgan('dev'));
  }

  app.use(express.json());

  routes(app);

  return app;
}

export default createServer;
