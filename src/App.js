import React, { useState, useEffect } from 'react';
import QueryResult from './QueryResult';
import NavigationBar from './components/NavigationBar';
import './styles.css';


function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Movies VKG"; 
    const allMoviesQuery = `PREFIX : <http://example.org/ontology/>

    SELECT ?movie ?budget ?rating ?revenue ?releaseDate ?genre ?spolan ?title ?rt ?prodComp
    WHERE {
      ?movie a :Movie ;
        :title ?title ;
        :budget ?budget ;
        :rating ?rating ;
        :revenue ?revenue ;
        :releaseDate ?releaseDate ;
        :genre ?genre ;
        :spokenLanguage ?spolan ;
        :runtime ?runtime ;
        :productionCompany ?prodComp . 
    }`;
    executeQuery(allMoviesQuery)
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
      <NavigationBar/>
      <h2>Movies</h2>
      {result && <QueryResult result={result} />}
    </div>
  );
}

export default App;