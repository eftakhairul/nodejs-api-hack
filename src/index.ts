import * as http from 'http';
import * as express from 'express';
import * as sourceMapSupport from 'source-map-support';
import app from "lib/core/app";

sourceMapSupport.install();

const router = express.Router({
  mergeParams: true,
});

router.use('/sys/health', (request: express.Request, response: express.Response) => {
  response.status(200);
  response.set('Content-Type', 'application/json');
  response.send({ 'okay': true });
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
  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port: ${address.port}`;

  process.stdout.write(`API server Up and Running on ${bind} \n`);
});
