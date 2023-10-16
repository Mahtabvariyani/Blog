"use client";

import React from "react";
import styles from "./Pagination.module.css";
import { useRouter } from "next/navigation";

function Pagination() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous</button>
      <button className={styles.button}>Next</button>
    </div>
  );
}

export default Pagination;
