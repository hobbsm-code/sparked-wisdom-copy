import React from 'react';
// import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Joke from '../utils/interfaces/Joke.interface';

interface JokeCardProps {
    joke: Joke;
}

const JokeCard: React.FC<JokeCardProps> = ({ joke }) => {
    return (
        <Card style={{ width: '80%', backgroundColor: '#F8F991' }}>
            <Card.Body>
                <Card.Text style={{ fontSize: '24px' }}>
                    {joke.joke}                    
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default JokeCard;