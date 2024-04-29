export const handleQueryOscarAward = async (executeQuery) => {
    const query = `PREFIX : <http://example.org/ontology/>
      SELECT ?movietitle ?oscaraward
      WHERE {
        ?movie a :Movie ;
          :title ?movietitle ;
          :isWinnerOf ?oscaraward .
      
        ?oscaraward a :OscarAward ;
      }`;
    executeQuery(query);
  };
  
  export const handleQueryDialogueEditor = async (executeQuery) => {
    const query = `PREFIX : <http://example.org/ontology/>
      SELECT ?dialogue_editor ?movie_title
      WHERE {
        ?de a :DialogueEditor ;
          :name ?dialogue_editor ;
          :isDialogueEditorOf ?movie .
      
        ?movie a :Movie ;
          :title ?movie_title .
      }`;
    executeQuery(query);
  };