const winston = require('winston');
const { colorize } = require('winston/lib/winston/config');
// require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
    winston.handleExceptions(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'uncoghtExceptions.log'}));
    
    process.on('unhandleRejection', (ex) => {
        throw ex;
    });
    
    winston.add(winston.transports.File, { filename: 'logfile.log' });
    // winston.add(winston.transports.MongoDB, { 
    //     db: 'mongodb://localhost/vidly',
    //     level: 'info'
    //  });
    
     const p = Promise.reject(new Error('Something failed misserably!'));
     p.then(() => console.log('Done'));
}
