"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  console.log("theme:", theme);
  const ballStyle = {
    position: "absolute",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    left: theme === "dark" ? "1px" : "auto",
    right: theme === "dark" ? "auto" : "1px",
    background: theme === "dark" ? "#0f172a" : "white",
  };

  return (
    <div
    className={styles.container}
    onClick={toggle}
    style={{
      background: theme === "dark" ? "white" : "#0f172a"
    }}
  >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={ballStyle}>
      </div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
