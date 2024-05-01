import React, { useState } from 'react';
import QueryResult from '../QueryResult';
import NavigationBar from "../components/NavigationBar";
import ActorSearch from '../components/ActorSearch';
import '../styles.css';


function ActorPage () {
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
        <h2 className='page-header'>Actors</h2>
        <p className="page-description">Enter the name of a actor to see films they have starred in and what character they played.</p>
        <ActorSearch className="actor-search-field" onSubmit={executeQuery}/>
        {result && <QueryResult result={result} />} 
    </div>
    );   

} 

export default ActorPage;