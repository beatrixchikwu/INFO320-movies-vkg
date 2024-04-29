export const handleQueryOscarAward = async (executeQuery) => {
    const query = `PREFIX : <http://example.org/ontology/>
      SELECT ?Title
      WHERE {
        ?movie a :Movie ;
          :title ?Title ;
          :isWinnerOf ?oscaraward .
      
        ?oscaraward a :OscarAward ;
      }`;
    executeQuery(query);
};
  
export const handleQueryDialogueEditor = async (executeQuery) => {
    const query = `PREFIX : <http://example.org/ontology/>
      SELECT ?dialogue_editor ?Title
      WHERE {
        ?de a :DialogueEditor ;
          :name ?dialogue_editor ;
          :isDialogueEditorOf ?movie .
      
        ?movie a :Movie ;
          :title ?Title .
      }`;
    executeQuery(query);
};

export const handleMovieInformation = async (executeQuery) => {
  const query = `PREFIX : <http://example.org/ontology/>
  SELECT ?Rating ?Revenue ?ReleaseDate ?Genre ?SpokenLanguage ?Title ?ProductionCompany
  WHERE {
    ?movie a :Movie ;
      :title ?Title ;
      :rating ?Rating ;
      :revenue ?Revenue ;
      :releaseDate ?ReleaseDate ;
      :genre ?Genre ;
      :spokenLanguage ?SpokenLanguage ;
      :productionCompany ?ProductionCompany . 
  }LIMIT 20`;
  executeQuery(query);
};