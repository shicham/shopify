import winston from 'winston';

import config from '../config/config';
import { info } from 'console';

interface LoggingInfo extends winston.Logform.TransformableInfo {
  level: string;
  message: string;
}

const enumerateErrorFormat = winston.format((info: winston.Logform.TransformableInfo) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const logger = winston.createLogger({
  level: config.env === 'development' ? 'debug' : 'info',
  format: winston.format.combine(
    enumerateErrorFormat(),
    config.env === 'development' ? winston.format.colorize() : winston.format.uncolorize(),
    winston.format.splat(),
    winston.format.printf((info: winston.Logform.TransformableInfo) => `${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console({
      stderrLevels: ['error'],
    }),
    //new winston.transports.File({ filename: config.logger.info.path, level: 'info' }),
    //new winston.transports.File({ filename: config.logger.war.path, level: 'warn' }),
    //new winston.transports.File({ filename: config.logger.err.path, level: 'error' }),
  ],
});

export default logger;