// src/components/Pagination.jsx
import styles from "./Pagination.module.css";

import { MdNavigateNext } from "react-icons/md";
export function Pagination({ page, setPage, info }) {
  return (
    <div className={styles.container}>
      {/* Solo resta si info.prev existe */}
      <span onClick={() => info.prev && setPage(page - 1)}>
        <MdNavigateNext className={styles.iconAnterior} />
      </span>

      <span> Pág {page} </span>

      {/* Solo suma si info.next existe */}
      <span onClick={() => info.next && setPage(page + 1)}>
        <MdNavigateNext className={styles.icon} />
      </span>
    </div>
  );
}