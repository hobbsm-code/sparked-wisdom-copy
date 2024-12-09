import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Quote from '../utils/interfaces/Quote.interface';

type CardProps = {
    currentQuote: Quote;
    addToSavedQuotes?: (() => void) | null;
    onItemClick?: ((quote: Quote) => void) | null;
}

const CardComponent = ({
    currentQuote,
    onItemClick
}: CardProps) => {
    return (
        <Card className= 'card'>
            <Card.Img variant="top" src={currentQuote.i? currentQuote.i : ''} />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    {currentQuote.q}
                    <br />{' -- ' + currentQuote.a}
                </Card.Text>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="primary" onClick={() => onItemClick?.(currentQuote)}>Save Quote</Button>
                </div>
            </Card.Body>
        </Card>
    );
};


export default CardComponent;