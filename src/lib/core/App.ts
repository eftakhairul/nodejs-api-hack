import * as express from 'express';
import {Express, Request, Response} from "express";
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';

const app: Express = express();

// Decode payload as json with body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet({
  frameguard: false,
}));


const env: string = app.get('env');
if (['development', 'test', 'staging'].indexOf(env) !== -1) {
  app.set('json spaces', 2);
} else {
  app.set('json spaces', 0);
}

// Trust the first proxy which should be an AWS ELB
app.set('trust proxy', true);

export const App: Express = app;
