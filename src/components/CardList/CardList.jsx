import React from 'react'
import Styles from "./CardList.module.css"
import Pagination from '../Pagination/Pagination'
function CardList() {
  return (
    <div className={Styles.content}>
      <Pagination />
    </div>
  )
}

export default CardList
