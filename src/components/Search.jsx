import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css"

export function Search({ search, setSearch, setPage }) {
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        autoFocus
        required
        maxLength={60}
        placeholder="Buscar por nombre..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />
      <FaSearch className={styles.searchIcon} />
    </div>
  );
}


          
