import * as fs from 'fs';
import * as path from 'path';
import * as deepExtend from 'deep-extend';

//Decide default environment
//Default is dev
const environment = process.env.NODE_ENV || "development";

//
//  Settings are constructed by taking the "base" settings mering in environment specific settings then
//
const files = [
  'base.js',
  `${environment}.js`
];

// tslint:disable-next-line:no-console
console.log(`Loading settings for node_env=${environment}`);  // eslint-disable-line

let allConfigs: any[] = files.map((file) => {
  const p = path.join(__dirname, '../../..', 'config', file);
  if (fs.existsSync(p)) {
    // tslint:disable:non-literal-require
    // tslint:disable:no-require-imports
    return require(p);
  }

  return undefined;
});

const configs = allConfigs.filter(e => e !== undefined).reduce(deepExtend, {});

export default configs;

