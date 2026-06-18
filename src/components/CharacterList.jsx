// src/components/CharacterList.jsx
import { useState, useEffect } from "react";
import Character from "./Character";

import { getCharacters } from "../data/httpClient";


import styles from "../components/CharacterList.module.css";
import { Pagination } from "./Pagination";
import  Search  from "./Search";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [search, setSearch] = useState(""); // Nuevo estado*****

  useEffect(() => {
    getCharacters(page, search).then((data) => {
      // Usamos el .results que viene de tu httpClient
      setCharacters(data.results || []);
      setInfo(data.info || {});
    });
  }, [page, search]); // Se activa si cambia la página O si escribes algo

  return (
    <div>
      <div className={styles.header}>
        <Search search={search} setSearch={setSearch} setPage={setPage} />

        {/* Botones de navegación */}
        <Pagination page={page} setPage={setPage} info={info} />
      </div>

      <ul className={styles.containerList}>
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
