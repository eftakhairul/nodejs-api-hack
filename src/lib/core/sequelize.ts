import * as Sequelize from 'sequelize'
import { default as configs } from './config';

const db = 'expressapp'
const username = 'root'
const password = 'root'

export const sequelize = new Sequelize(configs.db.database, configs.db.username, configs.db.password, {
  dialect: "postgres",
  port: configs.db.port,
});

sequelize.authenticate();

