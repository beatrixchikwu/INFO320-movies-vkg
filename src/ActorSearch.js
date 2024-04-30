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
      SELECT ?movietitle ?character
      WHERE {
        ?actor a :Actor ;
          :name "${actorName}" ;
          :playsRole ?role .
      
        ?role a :Role;
          :isRoleIn ?movie ;
          :characterName ?character .
      
        ?movie a :Movie ;
          :title ?movietitle .
      }`;

    onSubmit(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={actorName}
          onChange={handleChange}
          placeholder="Enter actor name"
        />
        <button type="submit">Search for actor</button>
      </form>
    </div>
  );
}

export default ActorSearch;
