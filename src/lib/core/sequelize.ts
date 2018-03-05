import * as Sequelize from 'sequelize'
import { default as configs } from './config';

export const sequelize = new Sequelize(configs.db.database, configs.db.username, configs.db.password, {
  dialect: "postgres",
  port: configs.db.port,
  logging: false,
});

sequelize.authenticate();

