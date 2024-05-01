import React, { useState } from 'react';
import '../styles.css';

function MovieSearch({ onSubmit }) {
  const [movieTitle, setMovieTitle] = useState('');

  const handleChange = (event) => {
    setMovieTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleMovieSearch(movieTitle, onSubmit);
  };

  const handleMovieSearch = (movieTitle, onSubmit) => {
    const query = `PREFIX : <http://example.org/ontology/>
      SELECT ?Title ?Rating ?Runtime ?Budget ?ReleaseDate ?spolan
      WHERE {
        ?movie a :Movie ;
          :title ${movieTitle} ;
          :rating ?Rating ;
          :runtime ?Runtime ;
          :budget ?Budget ;
          :releaseDate ?ReleaseDate ;
          :spokenLanguage ?spolan .
        FILTER regex(?Title, "^[a-zA-Z0-9 ]*$", "i")
      }`;

    onSubmit(query);
  };

  return (
    <div>
      <form className='actor-search-form' onSubmit={handleSubmit}>
        <input
          className='actor-search-input'
          type="text"
          value={movieTitle}
          onChange={handleChange}
          placeholder="Enter movie title"
        />
        <button className='ready-made-query-button' type="submit">Search for movie</button>
      </form>
    </div>
  );
}

export default MovieSearch;
