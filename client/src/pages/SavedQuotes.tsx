import type React from "react";
import { useState, useEffect } from 'react';
import type Quote from "../utils/interfaces/Quote.interface";
import QuoteList from "../components/QuoteList";
import { retrieveAllQuotes, deleteQuote } from "../api/QuoteAPI";

const SavedQuotes = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    const fetchQuotes = async () => {
        try {
            const data = await retrieveAllQuotes();
            console.log('Data from fetchQuotes:', data);
            const mappedData: Quote[] = data.map((quote: any) => ({
                quote_id: quote.quote_id,
                q: quote.content,
                a: quote.author,
                i: quote.img_url,
                h: ''
            }));
            setQuotes(mappedData);
        } catch (err) {
            console.log('Error from data retrieval:', err);
        }
    };

    const deleteFromSavedQuotes = async (
        e: React.MouseEvent<SVGElement>,
        id: number,
    ) => {
        e.preventDefault();
        try {
            await deleteQuote(id);
            fetchQuotes();
        } catch (err) {
            console.log('Error from Quote Deletion:', err);
        }
    };

    useEffect(() => {
        fetchQuotes();
    }, []);

    return (
        <div className= 'quoteTable'>
            {(!quotes?.length || quotes?.length === 0) ? (
                <h1 style={{ margin: '16px 0' }}>No Quotes Found</h1>
            ) : (

                <QuoteList
                    quotes={quotes} deleteFromSavedQuotes={deleteFromSavedQuotes} />
            )}
        </div>
    );
};

export default SavedQuotes;