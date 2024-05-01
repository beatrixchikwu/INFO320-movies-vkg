import React, { useState } from 'react';

function ActorSearch({ onSubmit }) {
  const [actorName, setActorName] = useState('');

  const handleChange = (event) => {
    setActorName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleActorSearch(actorName, onSubmit);
  };

  const handleActorSearch = (actorName, onSubmit) => {
    const query = `PREFIX : <http://example.org/ontology/>
      SELECT ?Title ?Character
      WHERE {
        ?actor a :Actor ;
          :name "${actorName}" ;
          :playsRole ?role .
      
        ?role a :Role;
          :isRoleIn ?movie ;
          :characterName ?Character .
      
        ?movie a :Movie ;
          :title ?Title .
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
          value={actorName}
          onChange={handleChange}
          placeholder="Enter actor name"
        />
        <button className='ready-made-query-button' type="submit">Search for actor</button>
      </form>
    </div>
  );
}

export default ActorSearch;