import Quote from '../utils/interfaces/Quote.interface';
import Auth from '../utils/auth';

const retrieveAllQuotes = async (): Promise<Quote[]> => {
    try {
        const response = await fetch('/api/quotes', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Auth.getToken()}`
          }
        });
        const data = await response.json();
    
        if(!response.ok) {
          throw new Error('invalid API response, check network tab!');
        }
    
        return data;
      } catch (err) {
        console.log('Error from data retrieval:', err);
        return [];
      }  
    };

const createQuote = async (body: Quote): Promise<void> => {
    try {
        const response = await fetch(
          '/api/quotes/', {
            method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
              },
            body: JSON.stringify(body)
          }
    
        )
        const data = response.json();
    
        if(!response.ok) {
          throw new Error('invalid API response, check network tab!');
        }
    
        return data;
    
      } catch (err) {
        console.log('Error from Quote Creation: ', err);
        return Promise.reject('Could not add to saved quotes');
      }
    };

const deleteQuote = async (id: number): Promise<void> => {
    try {
        const response = await fetch(
          `/api/quotes/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${Auth.getToken()}`
            }
          }
        )
        const data = await response.json();
    
        if(!response.ok) {
          throw new Error('invalid API response, check network tab!');
        }
    
        return data;
      } catch (err) {
        console.error('Error in deleting quote', err);
        return Promise.reject('Could not delete quote');
      }
    };

    export { retrieveAllQuotes, createQuote, deleteQuote };