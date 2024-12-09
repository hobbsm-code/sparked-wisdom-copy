import type React from 'react';
import { IoIosRemoveCircle } from "react-icons/io";
import type Quote from '../utils/interfaces/Quote.interface';

type QuoteListProps = {
  quotes: Quote[];
  deleteFromSavedQuotes: ((
      e: React.MouseEvent<SVGElement>,
      id: number
    ) => void) | null;
}

const QuoteList = ({
  quotes,
  deleteFromSavedQuotes
} : QuoteListProps) => {
  return (
    <div className= 'quoteLi '>
      <h1>Saved Quotes</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Quote</th>
            <th>Author</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map(quote => (
            <tr key={quote.quote_id}>
              <td style={{ textAlign: 'center' }}><img src={quote.i ?? ''} alt={quote.a ?? 'No author'} width="50" /></td>
              <td>{quote.q}</td>
              <td>{quote.a}</td>
                <td style={{ textAlign: 'center' }}>
                <IoIosRemoveCircle
                  style={{ fontSize: '50px', cursor: 'pointer', backgroundColor: 'black', fill: 'red', borderRadius: '50%' }}
                  onClick={(e) => deleteFromSavedQuotes 
                    && typeof quote.quote_id === 'number'
                    && deleteFromSavedQuotes(e, quote.quote_id)}
                />
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuoteList;
