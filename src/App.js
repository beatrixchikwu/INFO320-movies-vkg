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

  return (
    <div className='container'>
      <h1 className='header'>Explore our Movie Knowledge Graph</h1>
      <QueryInput onSubmit={executeQuery} />
      {error && <div>Error: {error}</div>}
      {result && <QueryResult result={result} />}
    </div>
  );
}

export default App;
