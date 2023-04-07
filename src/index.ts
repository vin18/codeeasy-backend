import config from 'config';
import connectDb from './utils/connectDb';
import logger from './utils/logger';
import createServer from './server';

const port = config.get<number>('port');
const app = createServer();

app.use('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, async () => {
  logger.info(`Server started on port ${port}`);

  await connectDb();
});
