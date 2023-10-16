import React from "react";
import Styles from "./CardList.module.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
function CardList() {
  return (
    <div className={Styles.content}>
      <Card />
      <Card />
      <Card />
      <Card />     
      <Card />

      <Pagination />

    </div>
  );
}

export default CardList;
