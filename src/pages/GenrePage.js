import React, { useState} from "react";
import { handleQueryOscarAward } from '../QueryFunctions/QueryFunctions';
import { handleAnimationGenre } from "../QueryFunctions/QueryGenreFunctions";
import QueryResult from "../QueryResult";
import NavigationBar from "../components/NavigationBar";

function GenrePage () {
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
        <div className="genre-page-container">
            <NavigationBar/>
            <div className="genre-buttons">
                <button className='ready-made-query-button' onClick={() => handleQueryOscarAward(executeQuery)}>
                    Oscar Award Winning Movies
                </button>
                <button>

                </button>
                <button>
                    
                </button>
            </div>
            {result && <QueryResult result={result} />}
        </div>
    )
}

export default GenrePage;