import {Quote} from '../models/index.js';

export const seedQuotes = async () => {
  await Quote.bulkCreate([
    {
      content: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs',
      img_url: 'https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2021/02/Rick-Astley-Music-Video-Remastered-in-4K-Featured-image.jpg'
    },
    {
      content: 'The best time to plant a tree was 20 years ago. The second best time is now.',
      author: 'Chinese Proverb',
      img_url: 'https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2021/02/Rick-Astley-Music-Video-Remastered-in-4K-Featured-image.jpg'
    },
]);
};
