import { useState } from 'react';
import Quote from '../utils/interfaces/Quote.interface';
import Joke from '../utils/interfaces/Joke.interface';
import { getQuotes, getJoke } from '../api/API';
import CarouselComponent from '../components/Carousel';
import JokeCard from '../components/JokeCard';


const HomePage = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [currentComponent, setCurrentComponent] = useState<string>('');
    const [joke, setJoke] = useState<Joke | null>();

    const jokeTopics: string[] = [
        'dogs', 'cats', 'food', 'travel', 'music',
        'science', 'history', 'technology', 'sports', 'nature',
        'politics', 'celebrities', 'school', 'work', 'money',
        'health', 'relationships', 'religion', 'law', 'animals',
        'books', 'movies', 'television', 'space', 'fashion',
        'art', 'environment', 'cars', 'languages', 'games',
        'weather', 'computers', 'math', 'medicine', 'psychology',
        'business', 'economics', 'engineering', 'communication', 'education',
        'family', 'fitness', 'gaming', 'home', 'internet',
        'shopping', 'social media', 'travel', 'weather', 'work', 'zodiac'
    ];

    const fetchQuotes = async () => {
        try {
            const data: any[] = await getQuotes();
            console.log('Data:', data);
            setQuotes(data);
        } catch (err) {
            console.log('an error occurred', err);
        }
    };

    const fetchJoke = async () => {
        const randomIndex = Math.floor(Math.random() * jokeTopics.length);
        const data: Joke[] = await getJoke(jokeTopics[randomIndex]);
        setJoke(data[0]);
    };

    const handleRemoveQuote = (quote: Quote) => {
        let quoteList: Quote[] = quotes;
        quoteList = quotes.filter((q) => q.q !== quote.q);
        if (quoteList.length !== 0) {
            setQuotes(quoteList);
        }
    };

    const handleButtonClick = (component: string) => {
        if (component === 'quoteCard') {
            fetchQuotes();
        } else if (component === 'jokeCard') {
            fetchJoke();
        }
        setCurrentComponent(component);
    };

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>What kind of experience do you want?</h1>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <button className="btn btn-primary" onClick={() => [handleButtonClick('quoteCard')]}>Inspire Me</button>
                    <button className="btn btn-primary" onClick={() => [handleButtonClick('jokeCard')]}>Make Me Laugh</button>
                </div>
            </div>

            {currentComponent && (
                <div className='quoteCard'>
                    {currentComponent === 'quoteCard' && (
                        <CarouselComponent quotes={quotes} handleRemoveQuote={handleRemoveQuote} />
                    )}
                    {currentComponent === 'jokeCard' && joke && (
                        <JokeCard joke={joke} />
                    )}
                </div>
            )}
        </>
    );
};

export default HomePage;