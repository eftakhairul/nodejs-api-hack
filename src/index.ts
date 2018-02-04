import { App, core } from "./lib/core/App";
import * as express from 'express';

// declare function require(name: string);
// tslint:disable-next-line:no-var-requires
// tslint:disable-next-line:no-var-requires
require('source-map-support').install();

const router = express.Router({
  mergeParams: true,
});

router.use('/sys/health', (request: core.Request, response: core.Response) => {
  response.status(200);
  response.set('Content-Type', 'application/json');
  response.send('{ "ok": true }');
});


App.use(router);

const port: number = parseInt(process.env.NODE_PORT as string, 10) || 3000;
App.listen(port, () => {  
  process.stdout.write(`API server Up and Running on port ${port} \n`);
});