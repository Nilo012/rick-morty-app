import styles from "../components/Character.module.css"

import { Link } from "react-router-dom";

function Character({ character }) {
  return (
    <>
      <li className={styles.card}>
        
        <Link to={"/details/"+  character.id }>
        <img
          src={character.image}
          alt={character.name}
          className={styles.cardImg}
        />
        </Link>
        <h2>{character.name}</h2>
        <h4>{character.species}</h4>
        
        
      </li>
    </>
  );
}
export default Character;
