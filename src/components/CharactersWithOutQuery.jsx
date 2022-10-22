import React, { useEffect, useState } from "react";

const CharactersWithOutQuery = () => {
  const [characters, setCharacters] = useState(null);

  const fetchCharacter = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <>
      <h1>character</h1>
      {characters ? (
        characters.map((character) => (
          <div key={character.id}>{character.name} </div>
        ))
      ) : (
        <h2> Loading... </h2>
      )}
    </>
  );
};

export default CharactersWithOutQuery;
