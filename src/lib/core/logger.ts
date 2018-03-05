import * as bunyan from 'bunyan';
// tslint:disable:no-require-imports
import bunyanPrettystream = require("bunyan-prettystream");
import { default as configs } from './config';
import { AnyFindOptions } from 'sequelize';
export { bunyan as Logger };

const loggers: { [name: string]: bunyan } = {};

const createLogger = (name: string, level: bunyan.LogLevelString, stream: any) => {
  loggers[name] = bunyan.createLogger({
    name,
    streams: [
      {
        level,
        stream,
        type: "raw",
      },
    ],
  }).child({ buildVersion: process.env.IMG_VERSION || 'development' });
}

export function getLogger(name : string) : bunyan {
  if (loggers[name] === undefined) {
    const level : bunyan.LogLevelString = configs.logLevel || (process.env.NODE_ENV !== "production" ? "debug" : "info");
    
    let stream = new bunyanPrettystream();
    stream.pipe(process.stdout);

    createLogger(name, level, stream);
  }

  return loggers[name];
}

const defaultLogger = getLogger("default-logger");

export default defaultLogger;
