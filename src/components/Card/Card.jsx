import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";
import Image from "next/image";

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/codo.jpg" alt="" fill className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>12.06.23</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href={"/"}>
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
            distinctio.
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo et
            quisquam repellendus aspernatur praesentium accusantium?
          </p>
        </Link>
        <div className={styles.desc} />
        <Link href={"/"} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
