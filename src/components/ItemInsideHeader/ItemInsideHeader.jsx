import React from "react";
import s from "./ItemInsideHeader.module.css";

const ItemInsideHeader = () => {
  return (
    <div>
      <ul className={s.ItemInsideHeaderList}>
        <li className={s.ItemInsideHeaderListItem}>
          <h3>Features</h3>
        </li>
        <li className={s.ItemInsideHeaderListItem}>
          <h3>Reviews</h3>
        </li>
      </ul>
    </div>
  );
};

export default ItemInsideHeader;
