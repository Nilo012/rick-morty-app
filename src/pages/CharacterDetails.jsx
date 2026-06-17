import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterDetails } from "../data/httpClient";

import styles from "./CharacterDetails.module.css";

export function CharacterDetails() {
  const { detailsId } = useParams(); // Esto captura el ":detailsId" de tu ruta
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    // Aquí llamas a tu API pasando el ID
    getCharacterDetails(detailsId).then((data) => {
      setCharacter(data);
    });
  }, [detailsId]);

  if (!character) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.detailsContainer}>
      <img
        src={character.image}
        alt={character.name}
        className={`${styles.detailsImg} ${styles.col}`}
      />
      <div className={`${styles.details} ${styles.col}`}>
        <h2 className={styles.title}>{character.name}</h2>

        <p>
          <strong>Especie:</strong> {character.species}
        </p>
        <p>
          <strong>Estado:</strong> {character.status}
        </p>
        <p>
          <strong>Género:</strong> {character.gender}
        </p>
        <p>
          <strong>Origen:</strong> {character.origin.name}
        </p>
        <p>
          <strong>Ubicación actual:</strong> {character.location.name}
        </p>
        <p>
          <strong>Apariciones:</strong> {character.episode.length} episodios
        </p>
        <p>
          <strong>Registrado el:</strong>{" "}
          {new Date(character.created).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
