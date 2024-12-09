import { Model, DataTypes, Optional, Sequelize } from 'sequelize';
import { User } from './users.js';
//import { Quote } from './Quote.js';

interface SavedQuoteAttributes {
  quote_id: number;
  content: string;
  author: string;
}

interface SavedQuoteCreationAttributes extends Optional<SavedQuoteAttributes, 'quote_id'> {}

export class SavedQuote extends Model<SavedQuoteAttributes, SavedQuoteCreationAttributes> implements SavedQuoteAttributes {
  quote_id!: number;
  content!: string;
  author!: string;

  public readonly assignedUser?: User;

  
}



export function SavedQuoteFactory(sequelize: Sequelize): typeof SavedQuote {
  SavedQuote.init(
    {
        quote_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'SavedQuote',
      tableName: 'saved_quotes',
      timestamps: false,
    }
  );

  return SavedQuote;
}

// Define relationships
//User.belongsToMany(Quote, { through: SavedQuote });
//Quote.belongsToMany(User, { through: SavedQuote });



