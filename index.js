// const winston = require('winston');
// const express = require('express');
// const app = express();

// require('./startup/logging')();
// require('./startup/routes')(app);
// require('./startup/db')();
// require('./startup/config')();
// require('./startup/validation')();

// // PORT
// const port = process.env.PORT || 3000;
// const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

// module.exports = server;


const express = require('express');
const winston = require('winston');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

process.on('uncaughtException', (ex) => {
    winston.error('We got an uncaught exception: ', ex);
    process.exit(1);
});

process.on('unhandledRejection', (ex) => {
    winston.error('We got an unhandled rejection: ', ex);
    process.exit(1);
});

module.exports = server;
