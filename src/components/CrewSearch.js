import React, { useState } from 'react';
import '../styles.css';

function CrewSearch({ onSubmit }) {
  const [crewName, setCrewName] = useState('');

  const handleChange = (event) => {
    setCrewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCrewSearch(crewName, onSubmit);
  };

  const handleCrewSearch = (crewName, onSubmit) => {
    const query = `PREFIX : <http://example.org/ontology/>

    SELECT ?Title ?Job
    WHERE {
        ?person a :Person ;
            :name "${crewName}" ;
            ?p ?movie .
            FILTER(?p=:isWriterOf || ?p=:isDialogueEditorOf || ?p=:isExecutiveProducerOf || ?p=:isDirectorOf || ?p=:isProducerOf) .
        ?person a ?Job .
            FILTER(?Job=:Writer || ?Job=:DialogueEditor || ?Job=:ExecutiveProducer || ?Job=:Director || ?Job=:Producer) .
    
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
          value={crewName}
          onChange={handleChange}
          placeholder="Enter name of crew member"
        />
        <button className='ready-made-query-button' type="submit">Search for crew</button>
      </form>
    </div>
  );
}

export default CrewSearch;