"use client";

import React, { useState } from "react";
import styles from "./Write.module.css";
import Image from "next/image";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function page() {
  const { status } = useSession();
  console.log(status);

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  if (status === "loading") {
    return <div className={styles.loading}>Loading ...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <select className={styles.select}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button}>
          plus
          <Image src="/sun.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <label htmlFor="image">
                img
                <Image src="/sun.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              external
              <Image src="/sun.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              video
              <Image src="/sun.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
}

export default page;
