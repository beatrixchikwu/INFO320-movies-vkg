import React, { useState, useEffect } from 'react';
import QueryResult from './QueryResult';
import NavigationBar from './components/NavigationBar';
import MovieSearch from './components/MovieSearch';
import './styles.css';


function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Movies VKG"; 
    const allMoviesQuery = `PREFIX : <http://example.org/ontology/>

    SELECT ?Title ?Rating ?Runtime ?Budget ?ReleaseDate ?SpokenLanguage
    WHERE {
      ?movie a :Movie ;
        :title ?Title ;
        :rating ?Rating ;
        :runtime ?Runtime ;
        :budget ?Budget ;
        :releaseDate ?ReleaseDate ;
        :spokenLanguage ?SpokenLanguage .
        FILTER regex(?Title, "^[a-zA-Z0-9 ]*$", "i")
        FILTER regex(?SpokenLanguage, "^[a-zA-Z0-9 ]*$", "i")

    }LIMIT 500`;
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
      <h2 className='page-header'>Movies</h2>
      <p className="page-description">Search for specific movies to see details about them.</p>
      <MovieSearch className="actor-search-field" onSubmit={executeQuery}/>
      {result && <QueryResult result={result} />}
    </div>
  );
}

export default App;