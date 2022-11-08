import React, {useEffect, useState} from "react";
import {Character} from "./Character.jsx";
import {NavMenu} from "./NavMenu/NavMenu.jsx";

export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`,
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className='container'>
      <NavMenu page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='row'>
          {characters.map((character) => {
            return (
              <div className='col-md-4' key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavMenu page={page} setPage={setPage} />
    </div>
  );
};
