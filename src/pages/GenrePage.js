import React, { useState} from "react";
import { handleQueryOscarAward } from '../QueryFunctions/QueryFunctions';
import { handleAnimationGenre, handleActionGenre, handleFamilyGenre, handleAdventureGenre, handleComedyGenre, handleCrimeGenre, 
    handleDocumentaryGenre, handleDramaGenre, handleFantasyGenre, handleHistoryGenre } from "../QueryFunctions/QueryGenreFunctions";
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
            <h2>Genre</h2>
            <div className="genre-buttons">
                <button className='ready-made-query-button' onClick={() => handleAdventureGenre(executeQuery)}>Adventure</button>
                <button className='ready-made-query-button' onClick={() => handleActionGenre(executeQuery)}>Action</button>
                <button className='ready-made-query-button' onClick={() => handleAnimationGenre(executeQuery)}>Animation</button>
                <button className='ready-made-query-button' onClick={() => handleComedyGenre(executeQuery)}>Comedy</button>
                <button className='ready-made-query-button' onClick={() => handleCrimeGenre(executeQuery)}>Crime</button>
                <button className='ready-made-query-button' onClick={() => handleDocumentaryGenre(executeQuery)}>Documentary</button>
                <button className='ready-made-query-button' onClick={() => handleDramaGenre(executeQuery)}>Drama</button>
                <button className='ready-made-query-button' onClick={() => handleFamilyGenre(executeQuery)}>Family</button>
                <button className='ready-made-query-button' onClick={() => handleFantasyGenre(executeQuery)}>Fantasy</button>
                <button className='ready-made-query-button' onClick={() => handleHistoryGenre(executeQuery)}>History</button>
                <button className='ready-made-query-button' onClick={() => handleQueryOscarAward(executeQuery)}>Oscar-Winning Films</button>
            </div>
            {result && <QueryResult result={result} />}
        </div>
    )
}

export default GenrePage;