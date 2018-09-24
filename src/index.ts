import * as http  from 'http';
import * as express from 'express';
import {Request, Response} from "express";
import app from "lib/core/app";


// declare function require(name: string);
// tslint:disable-next-line:no-var-requires
// tslint:disable-next-line:no-var-requires
require('source-map-support').install();

const router = express.Router({
  mergeParams: true,
});

router.use('/sys/health', (request: Request, response: Response) => {
  response.status(200);
  response.set('Content-Type', 'application/json');
  response.send({ "ok": true });
});


app.use(router);

/**
 * Setting up port
 */
const port: number = parseInt(process.env.NODE_PORT as string, 10) || 3000;
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string'? 'pipe ' + addr : 'port ' + addr.port;

  process.stdout.write(`API server Up and Running on ${bind} \n`);
});
