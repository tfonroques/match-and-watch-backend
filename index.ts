import express from 'express';
import config from 'config';

const app = express();

if (!config.get('password')) {
  console.error('FATAL ERROR : password is not defined');
  process.exit(1);
}

require('./init/db')();
require('./init/routes')(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;
