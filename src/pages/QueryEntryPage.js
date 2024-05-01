import React, { useState } from 'react';
import QueryInput from '../QueryInput';
import QueryResult from '../QueryResult';
import NavigationBar from "../components/NavigationBar";
import '../styles.css';


function QueryEntryPage () {

    
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const executeQuery = async (query) => {
        try {
            const response = await fetch('http://localhost:8080/sparql', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/sparql-query',
            },
            body: query,
            });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const resultData = await response.text();
        setResult(resultData);
        setError(null);
        } catch (error) {
        setError(`Error: ${error.message}`);
        setResult(null);
        }
  };

  return (
    <div className='actor-page-container'>
        <NavigationBar/>
        <h2>Query Entry</h2>
        <p>Enter your owm SPARQL queries in the box below.</p>
        <QueryInput className='input-box' onSubmit={executeQuery} />
        {error && <div>Error: {error}</div>}
        {result && <QueryResult result={result} />}
    </div>
    );   

} 

export default QueryEntryPage;