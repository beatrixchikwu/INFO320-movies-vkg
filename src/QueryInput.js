import React, { useState } from 'react';
import './App.css';

function QueryInput({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form className='input-container' onSubmit={handleSubmit}>
      <textarea className='input-box' value={query} onChange={handleChange} rows={6} cols={50} />
      <button className='input-button'type="submit">Submit Query</button>
    </form>
  );
}

export default QueryInput;
