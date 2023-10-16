import React from 'react'
import styles from './SinglePage.module.css'
import Image from 'next/image';
import Comment from '@/components/Comments/Comment';
import Menu from '@/components/Menu/Menu';
function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>12.33.2023</h1>
          <div className={styles.user}>

              <div className={styles.userImageContainer}>
                <Image src='/codo.jpg' alt="" fill className={styles.avatar} />
              </div>
            
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Mah</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
  
          <div className={styles.imageContainer}>
            <Image src='/codo.jpg' alt="" fill className={styles.image} />
          </div>
      
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}

          />
          <div className={styles.comment}>
            <Comment />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage
