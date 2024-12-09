import {sequelize} from '../models/index.js';
import {seedQuotes} from './quote-seeds.js';
import { seedSavedQuotes } from './saved-quote-seeds.js';
import { seedUsers } from './user-seeds.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedQuotes();
    console.log('\n-----  QUOTES SEEDED -----\n');
    
    await seedSavedQuotes();
    console.log('\n----- SAVED QUOTES SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
