import express from "express";
import userRoutes from "./routes/UserRoutes.js";
import dotenv from "dotenv";
// import { createLogger, format, transports } from "winston";
// import logRequest from "./logger.js";
import logger from './logger.js';

import log4js from "log4js";
import fs from 'node:fs';
import pino from "pino";
import http  from "http";






const app = express();

dotenv.config();
const port = process.env.PORT;


logger.info("deneme");
logger.warn("deneme2");


/*
const logger = pino();
logger.info("Hi from pino");
logger.error("kritik hata tespit edildi");
*/
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

// info: test message my string {}
logger.log('info', 'test message %s', 'my string');

// info: test message 123 {}
logger.log('info', 'test message %d', 123);

// info: test message first second {number: 123}
logger.log('info', 'test message %s, %s', 'first', 'second', { number: 123 });

*/

// Middleware to parse JSON bodies
app.use(express.json());

// Use the user routes
app.use('/api', userRoutes);



app.listen(port, () => {
    console.log(`Server running on 10.150.238.233:${port}`);
});
