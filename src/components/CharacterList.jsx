// src/components/CharacterList.jsx
import { useState, useEffect } from "react";
import Character from "./Character";

import { getCharacters } from "../data/httpClient";

// src/components/CharacterList.jsx
import styles from "../components/CharacterList.module.css";

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(1).then((data) => {
      // Usamos el .results que viene de tu httpClient
      setCharacters(data.results);
    });
  }, []);

  return (
    <>
      <ul className={styles.container}>
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </ul>
    </>
  );
}

export default CharacterList;
