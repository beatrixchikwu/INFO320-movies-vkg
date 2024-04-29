import React, { useState } from 'react';
import QueryInput from './QueryInput';
import QueryResult from './QueryResult';
import './styles.css';
import { handleQueryOscarAward, handleQueryDialogueEditor } from './QueryFunctions';

function App() {
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
    <div className='container'>
      <div className='content'>
        <h1 className='header'>Explore our Movie Knowledge Graph</h1>
        <p className='description-paragraph'>Try some of these suggested queries or enter your own in the box below</p>
        <div className='ready-made-queries'>
          <button className='ready-made-query-button' onClick={() => handleQueryOscarAward(executeQuery)}>
          Which movies have won an Oscar Award?
          </button>
          <button className='ready-made-query-button' onClick={() =>handleQueryDialogueEditor(executeQuery)}>
          Give me a list of movies and their dialogue editors.
          </button>
          <button className='ready-made-query-button'>
          Ingunn, legg til flereknapper med de kulere queriesene du lagde.
          </button>
          <button className='ready-made-query-button'>Test 1</button>
          <button className='ready-made-query-button'>Test 2</button>
        </div>
        <QueryInput className='input-box' onSubmit={executeQuery} />
        {error && <div>Error: {error}</div>}
        {result && <QueryResult result={result} />}
      </div>
    </div>
  );
}

export default App;
