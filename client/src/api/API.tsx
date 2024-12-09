
const getQuotes = async () => {
    const apiKey = import.meta.env.VITE_QUOTE_API_KEY;
    try {
        const response = await fetch(`https://zenquotes.io/api/quotes/${apiKey}`);
        
        const data = await response.json();
        if (!response.ok) {
          throw new Error('invalid API response, check the network tab');
        }
        // console.log('Data:', data);
        return data;
      } catch (err) {
        // console.log('an error occurred', err);
        //headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
//headers.append('Access-Control-Allow-Credentials', 'true');
        return [];
      }
};

const getInspirationImg = async () => {
    try {
        const response = await fetch('https://zenquotes.io/api/image');
        if (!response.ok) {
          throw new Error('invalid API response, check the network tab');
        }
        return response.url;
      } catch (err) {
        // console.log('an error occurred', err);
        return '';
      }
};

const getJoke = async (keyword: string) => {
    const apiKey = import.meta.env.VITE_HUMOR_API_KEY;
    
    try {
        const response = await fetch(`https://api.humorapi.com/jokes/search?api-key=${apiKey}&number=1&keywords=${keyword}`);
        const data = await response.json();
        if (!response.ok) {
          throw new Error('invalid API response, check the network tab');
        }
        // console.log('Data:', data);
        const jokes = data.jokes.map((joke: any) => {
          return {
            id: joke.id,
            joke: joke.joke
          };
        });
        return jokes;
      } catch (err) {
        // console.log('an error occurred', err);
        return [];
      }
};

export { getQuotes, getInspirationImg, getJoke };