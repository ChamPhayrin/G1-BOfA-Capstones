const {logEvents} = require('./logEvents.cjs');

const errorHandler = (error, req, res, next) => {
  logEvents(`${error.name}: ${error.message}`, 'errLog.txt');
  res.status(500).send(error.message);
};

module.exports = errorHandler;