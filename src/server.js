import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';

import { Logger } from '@utils';
import { Posts } from '@api';

Logger.stream = {
  write(message, encoding) {
    Logger.info(message, encoding);
  },
};

const app = express();
app.use('*', cors());
app.use(morgan('dev', { stream: Logger.stream }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(process.env.SERVER_APP_PORT, () => {
  Logger.debug(
    `Server Started on http://${process.env.SERVER_APP_HOST}:${process.env.SERVER_APP_PORT}`
  );
});

app.get('/', (req, res) => {
  res.send('Ping Successful');
});

app.use('/posts', Posts.Router);
