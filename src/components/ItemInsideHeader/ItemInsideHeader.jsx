import React from "react";
import s from "./ItemInsideHeader.module.css";

const ItemInsideHeader = ({ activeTab, onTabClick }) => {
  return (
    <div>
      <ul className={s.ItemInsideHeaderList}>
        <li
          className={`${s.ItemInsideHeaderListItem} ${
            activeTab === "Features" ? s.active : ""
          }`}
          onClick={() => onTabClick("Features")}
        >
          <h3>Features</h3>
        </li>
        <li
          className={`${s.ItemInsideHeaderListItem} ${
            activeTab === "Reviews" ? s.active : ""
          }`}
          onClick={() => onTabClick("Reviews")}
        >
          <h3>Reviews</h3>
        </li>
      </ul>
    </div>
  );
};

export default ItemInsideHeader;
