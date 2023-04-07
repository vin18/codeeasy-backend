import config from 'config';
import createServer from './server';

const port = config.get<number>('port');
const app = createServer();

app.use('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => console.log(`Server started on port ${port}`));
