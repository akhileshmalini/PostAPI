import * as winston from 'winston';

const AppLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      name: 'error',
      level: 'error',
      handleExceptions: true,
      json: false,
      colorize: true,
    }),
    new winston.transports.Console({
      name: 'debug',
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    }),
  ],
  exitOnError: false,
});

export default AppLogger;
