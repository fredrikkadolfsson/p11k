import { sequelize } from './index';

export const validateDBConnection = async (): Promise<void> => {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
};
