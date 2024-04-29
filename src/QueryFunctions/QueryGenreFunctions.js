
export const handleAnimationGenre = async (executeQuery) => {
    const query = `PREFIX : <http://example.org/ontology/>
    SELECT ?Title
    WHERE {
      ?movie a :Movie ;
        :genre "Animation" ;
        :title ?Title .
    }`;
    executeQuery(query);
};

export const handleActionGenre = async (executeQuery) => {
    const query = `PREFIX : <http://example.org/ontology/>
    SELECT ?Title
    WHERE {
      ?movie a :Movie ;
        :genre "Action" ;
        :title ?Title .
    }`;
    executeQuery(query);
};

export const handleFamilyGenre = async (executeQuery) => {
    const query = `PREFIX : <http://example.org/ontology/>
    SELECT ?Title
    WHERE {
      ?movie a :Movie ;
        :genre "Family" ;
        :title ?Title .
    }`;
    executeQuery(query);
};

export const handleAdventureGenre = async (executeQuery) => {
    const query = `PREFIX : <http://example.org/ontology/>
    SELECT ?Title
    WHERE {
      ?movie a :Movie ;
        :genre "Adventure" ;
        :title ?Title .
    }`;
    executeQuery(query);
};

export const handleComedyGenre = async (executeQuery) => {
    const query = `PREFIX : <http://example.org/ontology/>
    SELECT ?Title
    WHERE {
      ?movie a :Movie ;
        :genre "Comedy" ;
        :title ?Title .
    }`;
    executeQuery(query);
};

export const handleCrimeGenre = async (executeQuery) => {
    const query = `PREFIX : <http://example.org/ontology/>
    SELECT ?Title
    WHERE {
      ?movie a :Movie ;
        :genre "Crime" ;
        :title ?Title .
    }`;
    executeQuery(query);
};

export const handleDocumentaryGenre = async (executeQuery) => {
    const query = `PREFIX : <http://example.org/ontology/>
    SELECT ?Title
    WHERE {
      ?movie a :Movie ;
        :genre "Documentary" ;
        :title ?Title .
    }`;
    executeQuery(query);
};

export const handleDramaGenre = async (executeQuery) => {
    const query = `PREFIX : <http://example.org/ontology/>
    SELECT ?Title
    WHERE {
      ?movie a :Movie ;
        :genre "Drama" ;
        :title ?Title .
    }`;
    executeQuery(query);
};

export const handleFantasyGenre = async (executeQuery) => {
    const query = `PREFIX : <http://example.org/ontology/>
    SELECT ?Title
    WHERE {
      ?movie a :Movie ;
        :genre "Fantasy" ;
        :title ?Title .
    }`;
    executeQuery(query);
};

export const handleHistoryGenre = async (executeQuery) => {
    const query = `PREFIX : <http://example.org/ontology/>
    SELECT ?Title
    WHERE {
      ?movie a :Movie ;
        :genre "History" ;
        :title ?Title .
    }`;
    executeQuery(query);
};