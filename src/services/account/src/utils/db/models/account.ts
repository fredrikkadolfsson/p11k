import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

interface Account extends Model {
  readonly id: number;
  readonly email: string;
  readonly password: string;
}

type AccountStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Account;
};

const Account = (sequelize: Sequelize): AccountStatic =>
  sequelize.define('Account', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(128),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(128),
    },
  }) as AccountStatic;

export default Account;
