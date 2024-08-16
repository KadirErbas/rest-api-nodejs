import { createLogger, format, transports } from "winston";
import { fileURLToPath } from "url";
import {dirname, join} from 'path';
import os from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logFilePath = join(__dirname, '../logs', 'access.log')

const logger = createLogger({
  format: format.combine(
    format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    format.printf(({ timestamp, level, message }) => {
      const date = new Date();
      const month = date.toLocaleString('en-US', {month: 'short'});
      const day = date.getDate().toString().padStart(2, '0');
      const time = date.toTimeString().split(' ')[0];
      const hostname = os.hostname;
      const programName = 'supervisord';
      const pid = process.pid;
      const logLevel = level.toUpperCase();

      return `${month} ${day} ${time} ${hostname} ${programName} [${pid}]: ${timestamp}, ${logLevel} ${message}`;
    })
  ),
  transports: [
    new transports.File({
      filename:logFilePath
    })
  ]
});

export default logger;


/*
const { combine, timestamp, label, printf } = format;



const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  });
  
const logger = createLogger({
    format: combine(
      label({ label: 'right meow!' }),
      timestamp(),
      myFormat
    ),
    transports: [new transports.Console()],
    transports: [new transports.File({ filename: 'combined.log' })],

});

*/