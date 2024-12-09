import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';
//import sequelize from '../config/connections.js';
import { UserFactory } from './users.js';
import { SavedQuoteFactory } from './SavedQuotes.js';
import { QuoteFactory } from './Quote.js';

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });


const User = UserFactory(sequelize);
const Quote = QuoteFactory(sequelize);
const SavedQuote = SavedQuoteFactory(sequelize);

User.hasMany(SavedQuote, { foreignKey: 'user_id' });
SavedQuote.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

export { sequelize, User, Quote, SavedQuote };

