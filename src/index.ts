import { App, core } from "./lib/core/App";
import * as express from 'express';

// declare function require(name: string);
// tslint:disable-next-line:no-var-requires
// tslint:disable-next-line:no-var-requires
require('source-map-support').install();

const router = express.Router({
  mergeParams: true,
});

const env = App.get('env') ;
const port: number = parseInt(process.env.NODE_PORT, 10) || 3000;

if (['development', 'test', 'staging'].indexOf(env) !== -1) {
  App.set('json spaces', 2);
} else {
  App.set('json spaces', 0);
}

router.use('/sys/health', (request: core.Request, response: core.Response) => {
  response.status(200);
  response.set('Content-Type', 'application/json');
  response.send('{ "ok": true }');
});


App.use(router);

App.listen(port, () => {  
  process.stdout.write(`API server Up and Running on port ${port} \n`);
});