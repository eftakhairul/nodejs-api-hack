import * as express from "express";
import * as bodyParser from "body-parser";
import * as core from "Express";


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const env: string = app.get('env');
if (['development', 'test', 'staging'].indexOf(env) !== -1) {
  app.set('json spaces', 2);
} else {
  app.set('json spaces', 0);
}


export const App: core.Express = app;
export { core };