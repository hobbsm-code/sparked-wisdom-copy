import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

let sequelize: Sequelize;

dotenv.config();

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {

  sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string,
    {
      host: 'localhost',
      dialect: 'postgres',
    }
  );
}
export default sequelize;