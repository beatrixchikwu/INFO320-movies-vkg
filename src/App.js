import React, { useState } from 'react';
import QueryInput from './QueryInput';
import QueryResult from './QueryResult';
import './styles.css';

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

  const handleQueryOscarAward = () => {
    const query = `PREFIX : <http://example.org/ontology/>
      SELECT ?movietitle ?oscaraward
      WHERE {
        ?movie a :Movie ;
          :title ?movietitle ;
          :isWinnerOf ?oscaraward .
      
        ?oscaraward a :OscarAward ;
      }`;
    executeQuery(query);
  };

  return (
    <div className='container'>
      <div className='content'>
        <h1 className='header'>Explore our Movie Knowledge Graph</h1>
        <p>Try some of these suggested queries or enter your own in the box below</p>
        <button className='query-oscar-award' onClick={handleQueryOscarAward}>
         Which movies have won an Oscar Award?
        </button>
        <QueryInput className='input-box' onSubmit={executeQuery} />
        {error && <div>Error: {error}</div>}
        {result && <QueryResult result={result} />}
      </div>
    </div>
  );
}

export default App;
