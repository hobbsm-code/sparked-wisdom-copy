import { SavedQuote } from "../models/index.js";

export const seedSavedQuotes = async () => {
  await SavedQuote.bulkCreate([
    {
      content: 'You miss 100% of the shots you don’t take.',
      author: 'Wayne Gretzky'
    },
], { individualHooks: true });
};