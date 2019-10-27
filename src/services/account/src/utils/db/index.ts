import { Sequelize } from 'sequelize';
import config from '../../config';
import AccountModel from './models/account';

export const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  dialect: 'postgres',
  host: 'localhost',
});

export const Account = AccountModel(sequelize);
