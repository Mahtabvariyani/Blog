import React from "react";
import Link from "next/link";
import styles from './Comments.module.css'
import Image from "next/image";
function Comment() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      <div className={styles.write}>
        <textarea placeholder="write a comment..." className={styles.input} />
        <button className={styles.button}>Send</button>
      </div>

      <Link href="/login">Login to write a comment</Link>

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/codo.jpg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>Mah</span>
              <span className={styles.date}>12,13,2023</span>
            </div>
          </div>
          <p className={styles.desc}>Something</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
