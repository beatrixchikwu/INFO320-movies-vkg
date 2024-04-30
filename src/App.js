import React, { useState, useEffect} from 'react';
import QueryInput from './QueryInput';
import QueryResult from './QueryResult';
import ActorSearch from './ActorSearch';
import './styles.css';
import { handleQueryOscarAward, handleQueryDialogueEditor, handleMovieInformation } from './QueryFunctions/QueryFunctions';
import { handleAnimationGenre } from './QueryFunctions/QueryGenreFunctions';

function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Movies VKG"; 
  }, []);

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
    <div className='container'>
      <div className='content'>
        <h1 className='header'>Explore our Movie Knowledge Graph</h1>
        <p className='description-paragraph'>Try some of these suggested SPARQL queries or enter your own in the box below.</p>
        <div className='ready-made-queries'>
            <button className='ready-made-query-button' >Search for Actor</button>

            <button className='ready-made-query-button' >Search for Crew</button>
            {/* <button className='ready-made-query-button' onClick={() =>handleQueryDialogueEditor(executeQuery)}>
            Give me a list of movies and their dialogue editors.
            </button> */}

            <button className='ready-made-query-button' >Filter on Genre</button>
            {/* <button className='ready-made-query-button' onClick={() => handleAnimationGenre(executeQuery)}>
            Animation (ser jo helt jævlig ut av en eller annen grunn)
            </button> */}

            <button className='ready-made-query-button' onClick={() => handleQueryOscarAward(executeQuery)}>
            Oscar Award Winning Movies
            </button>
            
            <button className='ready-made-query-button' onClick={() => handleMovieInformation(executeQuery)}>
            All Movies
            </button>
        </div>
        <ActorSearch onSubmit={executeQuery} />
        <QueryInput className='input-box' onSubmit={executeQuery} />
        {error && <div>Error: {error}</div>}
        {result && <QueryResult result={result} />}
      </div>
    </div>
  );
}

export default App;
