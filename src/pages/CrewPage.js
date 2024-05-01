import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import CrewSearch from "../components/CrewSearch";
import QueryResult from "../QueryResult";

function CrewPage () {
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
        <div className="crew-page-container">
            <NavigationBar/>
            <h2 className='page-header'>Crew</h2>
            <p className="page-description">Enter the name of a crew member to see their role in different movies.</p>
            <CrewSearch className="actor-search-field" onSubmit={executeQuery}/>
            {result && <QueryResult result={result} />}
        </div>
        
    )
}

export default CrewPage;